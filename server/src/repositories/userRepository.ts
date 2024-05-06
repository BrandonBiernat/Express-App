import { User } from '../models/user';
import { dynamoClient } from '../helpers/dynamodb';

async function addUser(user: User) {
    const params = {
        TableName: 'Users',
        Item: user
    };
    return await dynamoClient.put(params).promise();
}