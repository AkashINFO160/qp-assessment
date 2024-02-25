import express, { Router } from 'express';
import { addRoleController } from 'controllers';

const roleRouters: Router = express.Router();

roleRouters.post('/add',addRoleController)

export { roleRouters }