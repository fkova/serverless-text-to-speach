import { SNS } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { v1 as uuid } from 'uuid';
import { ResponseFactory } from '../factories/response-factory';

const documentClient = new DocumentClient();
const snsClient = new SNS();

export default async (event: any) => {
    console.log('Generating new DynamoDB record');
    
    const recordId = uuid();
    const body = JSON.parse(event.body)
    const voice = body.voice;
    const text = body.text;

    await documentClient.put({
            TableName: process.env.DYNAMO_TABLE,
            Item: {
                'id': recordId,
                'text': text,
                'voice': voice,
                'status': 'PROCESSING'
            }
    }).promise().then(() => {
        console.log('posted in db');
    })
    .catch((err)=> {
        console.log(err);
    });

    await snsClient.publish({
            Message: recordId,
            TopicArn: process.env.SNS_TOPIC
        }).promise();

    return ResponseFactory.generateSuccessReaponse();
};