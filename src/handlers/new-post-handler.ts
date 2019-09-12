import { DynamoDB, SNS } from 'aws-sdk';
import { v1 as uuid } from 'uuid';

const documentClient = new DynamoDB.DocumentClient();
const snsClient = new SNS();

export default async (event: any) => {
    const recordId = uuid();

    console.log('Generating new DynamoDB record with id: ' + recordId);

    const body = JSON.parse(event.body)
    const voice = body.voice;
    const text = body.text;
 
    const params = {
        TableName: process.env.DYNAMO_TABLE,
        Item: {
            'id': recordId,
            'text': text,
            'voice': voice,
            'status': 'PROCESSING'
        }
    }

    await documentClient.put(params).promise()
    .then(() => {
        console.log('posted in db');
    })
    .catch((err)=> {
        console.log(err);
    });

    await snsClient.publish({
            Message: recordId,
            TopicArn: process.env.SNS_TOPIC
        }).promise();

    return {
        statusCode: 200
    }
};