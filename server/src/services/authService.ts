import { dynamoClient, tables } from '../data/dynamodb';
import { CreateUserRequest, LoginUserRequest, User } from '../models/user';
import { getUsers } from './userService';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

async function registerUser(user: CreateUserRequest) {
    const users = await getUsers();
    const foundUser = users
        .Items?.find((data) => data.Email === user.Email       || 
                               data.Username === user.Username ||
                               data.PhoneNumber === user.PhoneNumber);
    if(!foundUser) {
        const passwordHash = await bcrypt.hash(user.Password, 10);
        const id = crypto.randomUUID().toString();
        const newUser: User = {
            UserId: id,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName,
            PhoneNumber: user.PhoneNumber,
            Username: user.Username,
            PasswordHash: passwordHash
        };
        const params = {
            TableName: tables.users,
            Item: newUser
        };
        await dynamoClient.put(params).promise();
        return {
            succeeded: true,
            status: 200,
            payload: 'registered successfully'
        };
    } else {
        return {
            succeeded: false,
            status: 400,
            payload: 'Email already in use'
        };
    }
}

async function loginUser(credentials: LoginUserRequest) {
    const users = await getUsers();
    const foundUser = users.Items?.find((data) => credentials.Email === data.Email);
    if(foundUser) {
        const submittedPass = credentials.Password;
        const storedPass = foundUser.PasswordHash;
        const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
        if(!passwordMatch) {
            return {
                succeeded: false,
                status: 400,
                payload: 'Invalid email or password'
            };
        } else {
            return {
                succeeded: true,
                status: 200,
                payload: 'login successful'
            };
        }
    } else {
        return {
            succeeded: false,
            status: 400,
            payload: 'Invalid email or password'
        };
    }
}

export {
    registerUser,
    loginUser,
}