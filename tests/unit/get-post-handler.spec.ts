import { default as handler } from '../../src/handlers/get-post-handler';
import { APIGatewayEvent } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

describe.only('Testing get post lambda', () => {
    beforeAll(() => { 
    });

    afterAll(() => {
    });

    it('should give a valid response based on mocked db items', async () => {

    });

});