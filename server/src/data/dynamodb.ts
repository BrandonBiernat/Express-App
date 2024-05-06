import AWS from 'aws-sdk';
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const tables = {
    users: 'Users',
}

export { 
    dynamoClient,
    tables
};