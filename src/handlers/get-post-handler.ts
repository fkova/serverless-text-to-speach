import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export default async (event: any) => {
    console.log('event: '+JSON.stringify(event,null,2));

    const dc = new DocumentClient();
    const postId = event.pathParameters.id;
    var items;

    if(postId == "*"){
        items = await dc.scan({
            TableName: process.env.DYNAMO_TABLE
        }).promise();
    }else{
        items = await dc.get({
            TableName: process.env.DYNAMO_TABLE,
            Key: {
                id: postId
            }
        }).promise();
    }

    console.log(items);

    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify(items)
    }
};