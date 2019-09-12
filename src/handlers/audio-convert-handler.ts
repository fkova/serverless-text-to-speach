import { DynamoDB, SNS } from 'aws-sdk';
import { v1 as uuid } from 'uuid';

export default async (event: any) => {
    console.log('has been called' + event);
    return {
        statusCode: 200
    }
};