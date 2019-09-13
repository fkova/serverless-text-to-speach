import { APIGatewayProxyResult } from 'aws-lambda';

export class ResponseFactory {
    static generateSuccessReaponse(data?: any): APIGatewayProxyResult{
        return {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }
}