import { User, UserRequest } from '../models/user';
import { dynamoClient, tables } from '../data/dynamodb';
import crypto from 'crypto';

async function addUser(user: UserRequest) {
    const id = crypto.randomUUID().toString();
    const newUser: User = {
        UserId: id,
        Email: user.Email,
        FirstName: user.FirstName,
        LastName: user.LastName,
        PhoneNumber: user.PhoneNumber,
        Username: user.Username,
    };
    const params = {
        TableName: tables.users,
        Item: newUser
    };
    return await dynamoClient.put(params).promise();
}

async function getUserById(id: string) {
    const UserId = id;
    const params = {
        TableName: tables.users,
        Key: {
            UserId
        }
    };
    return await dynamoClient.get(params).promise();
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
    return await dynamoClient.delete(params).promise();
}

export {
    addUser,
    getUserById,
    getUsers,
    deleteUser
}