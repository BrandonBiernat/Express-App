import { dynamoClient, tables } from '../data/dynamodb';

async function getUserById(id: string) {
    const UserId = id;
    const params = {
        TableName: tables.users,
        Key: {
            UserId
        }
    };
    const user = await dynamoClient.get(params).promise();
    return {
        succeeded: true,
        status: 200,
        payload: user.Item
    };
}

async function getUsers() {
    const params = {
        TableName: tables.users
    };
    return await dynamoClient.scan(params).promise();
}

async function deleteUser(id: string) {
    const UserId = id;
    const params = {
        TableName: tables.users,
        Key: {
            UserId
        }
    };
    await dynamoClient.delete(params).promise();
    const deletedUser = await dynamoClient.get(params).promise();
    if(!deletedUser) {
        return {
            succeeded: true,
            status: 200,
            payload: 'user deleted'
        };
    } else {
        return {
            succeeded: false,
            status: 400,
            payload: 'failed to delete user'
        };
    }
}

export {
    getUserById,
    getUsers,
    deleteUser
}