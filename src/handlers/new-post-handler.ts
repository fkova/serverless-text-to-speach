import { DynamoDB, SNS } from 'aws-sdk';
import { v1 as uuid } from 'uuid';

const documentClient = new DynamoDB.DocumentClient();
const snsClient = new SNS();

export default async (event: any) => {
    const recordId = uuid();

    console.log('Generating new DynamoDB record with id: ' + recordId);
    console.log('Table: '+ JSON.stringify(process.env,null,2));
    
    const voice = event.body.voice;
    const text = event.body.text;

    /*
    const params = {
        TableName: process.env.DYNAMO_TABLE,
        Item: {
            'id': recordId,
            'text': text,
            'voice': voice,
            'status': 'PROCESSING'
        }
    }

    const result = await documentClient.put(params).promise();

    console.log(result);
    */
    return recordId;
};