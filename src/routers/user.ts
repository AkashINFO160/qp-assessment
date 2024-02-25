import express, { Router } from 'express';
import { addUserController, loginUserController } from 'controllers';

const userRouters: Router = express.Router();

userRouters.post('/add', addUserController)
userRouters.post('/login', loginUserController)

export { userRouters }