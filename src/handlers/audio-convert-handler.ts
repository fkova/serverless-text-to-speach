import AWS from 'aws-sdk';
import { v1 as uuid } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';



export default async (event: any) => {
    const documentClient = new DocumentClient();
    const polly = new AWS.Polly();
    const s3 = new AWS.S3();
    const postId = event["Records"][0]["Sns"]["Message"];
    const url = "https://s3.amazonaws.com/" + process.env.BUCKET_NAME + "/" + postId + ".mp3";

    console.log("Text to Speech function. Post ID in DynamoDB: " + postId);
    
    const postItem = (await documentClient.get({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
            id: postId
        }
    }).promise()).Item;

    const text = postItem.text;
    const voice = postItem.voice;

    await polly.synthesizeSpeech({
        OutputFormat: 'mp3',
        Text: text,
        VoiceId: voice
    }).promise().then(async data => {
        let s3params = {
            Body: data.AudioStream,
            Bucket: process.env.BUCKET_NAME,
            Key: postId + ".mp3",
            ACL: "public-read"
        };

        console.log('synthesize completed');

        await s3.upload(s3params).promise()
            .then(data => console.log('upload location: ' + data.Location))
            .catch(err => console.log('error during upload: ' + err.message));
    }).catch(err => console.log('err with synthesis'+err));


    await documentClient.update({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
            id: postId
        },
        UpdateExpression: 'set #statusAtt = :v, #urlAtt = :v2',
        ExpressionAttributeValues: {
            ':v': 'UPDATED', ':v2': url
        },
        ExpressionAttributeNames: {
            '#statusAtt': 'status', '#urlAtt': 'url'
        },
        ReturnValues: 'UPDATED_NEW'
    }).promise()
    .then(res => console.log('updated ' + JSON.stringify(res)))
    .catch(err => console.log('err '+ err));

    return {
        statusCode: 200
    }
};