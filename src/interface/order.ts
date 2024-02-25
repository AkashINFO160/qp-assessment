import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';



interface IOrderModel extends Model< InferAttributes<IOrderModel>, InferCreationAttributes<IOrderModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  userId: number
}

interface IOrder {
  userId: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

interface IOrderRequest {
  quantity: number;
  itemId: number;
  [key: string]: string | number | undefined;
}

export {
  IOrderModel,
  IOrder,
  IOrderRequest
}