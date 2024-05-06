import { Request, Response } from 'express';
import { addUser, deleteUser, getUserById, getUsers } from '../services/userService';
import { UserRequest } from '../models/user';

async function users(req: Request, res: Response) {
    try {
        const data = await getUsers();
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error: e});
    }
}

async function userById(req: Request, res: Response) {
    try {
        const id = req.params.userId;
        const data = await getUserById(id);
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error: e});
    }
}

async function create(req: Request, res: Response) {
    try {
        const newUser: UserRequest = req.body;
        const data = await addUser(newUser);
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error: e});
    }
}

async function remove(req: Request, res: Response) {
    try {
        const id = req.params.userId;
        const data = await deleteUser(id);
        res.status(200).json(data);
    } catch(e) {
        res.status(500).json({error: e});
    }
}

export {
    users,
    userById,
    create,
    remove
}