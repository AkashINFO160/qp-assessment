import express, { Router } from 'express';
import { addOrderController } from 'controllers';
import { ROLES } from 'enum';
import { checkPermissionMiddleware } from 'middlewares';

const orderRouters: Router = express.Router();

orderRouters.post('/add',checkPermissionMiddleware([ROLES.ADMIN]), addOrderController)

export { orderRouters }