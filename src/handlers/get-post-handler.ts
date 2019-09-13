import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { APIGatewayEvent } from 'aws-lambda';
import { ResponseFactory } from '../factories/response-factory';

export default async (event: APIGatewayEvent) => {
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

    return ResponseFactory.generateSuccessReaponse(items);
};