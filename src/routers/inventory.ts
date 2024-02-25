import express, { Router } from 'express';
import {
  getInventoryController,
  addInventoryController,
  updateInventoryController
} from 'controllers';
import { ROLES } from 'enum';
import { checkPermissionMiddleware } from 'middlewares';

const inventoryRouters: Router = express.Router();

inventoryRouters.post('/add',checkPermissionMiddleware([ROLES.ADMIN]), addInventoryController)
inventoryRouters.post('/update/:inventoryId', checkPermissionMiddleware([ROLES.ADMIN]), updateInventoryController)
inventoryRouters.post('/get',checkPermissionMiddleware([ROLES.ADMIN, ROLES.USER]),getInventoryController)

export { inventoryRouters }