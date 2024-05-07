import { Request, Response } from 'express';
import { CreateUserRequest, LoginUserRequest } from '../models/user';
import { loginUser, registerUser } from '../services/authService';

async function register(req: Request, res: Response) {
    try {
        const newUser: CreateUserRequest = req.body;
        const data = await registerUser(newUser);
        if(!data.succeeded) {
            res.status(data.status).json(data);
        } else {
            res.status(data.status).json(data);
            res.redirect('/');
        }
    } catch(e) {
        res.status(500).json({error: e});
    }
}

async function login(req: Request, res: Response) {
    try {
        const credentials: LoginUserRequest = req.body;
        const data = await loginUser(credentials);
        if(!data.succeeded) {
            res.status(data.status).json(data);
        } else {
            res.status(data.status).json(data);
            res.redirect('/');
        }
    } catch(e) {
        res.status(500).json({error: e});
    }
}

export {
    register,
    login,
}