import { login, register } from "../controllers/authController";
import { remove, userById, users } from "../controllers/userController";

module.exports = async (app: any) => {
    // Users
    app.get('/api/v1/users/getUsers', users);
    app.get('/api/v1/users/getById/:userId', userById);
    app.delete('/api/v1/users/deleteUser/:userId', remove);

    // Authentication
    app.put('/api/v1/auth/register', register);
    app.post('/api/v1/auth/login', login);
}