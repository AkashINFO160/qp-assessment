import express, { Router } from 'express';
import { addCategoryController } from 'controllers';

const categoryRouters: Router = express.Router();

categoryRouters.post('/add',addCategoryController)

export { categoryRouters }