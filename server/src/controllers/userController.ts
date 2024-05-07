import { Request, Response } from 'express';
import { deleteUser, getUserById, getUsers } from '../services/userService';

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
        if(!data.succeeded) {
            res.status(data.status).json(data);
        } else {
            res.status(data.status).json(data);
        }
    } catch(e) {
        res.status(500).json({error: e});
    }
}

async function remove(req: Request, res: Response) {
    try {
        const id = req.params.userId;
        const data = await deleteUser(id);
        res.status(data.status).json(data);
    } catch(e) {
        res.status(500).json({error: e});
    }
}

export {
    users,
    userById,
    remove
}