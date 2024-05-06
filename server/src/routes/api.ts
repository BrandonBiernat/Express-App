import { create, remove, userById, users } from "../controllers/userController";

module.exports = async (app: any) => {
    app.get('/api/v1/users/getUsers', users);
    app.get('/api/v1/users/getById/:userId', userById);
    app.post('/api/v1/users/createUser', create);
    app.delete('/api/v1/users/deleteUser/:userId', remove);
}