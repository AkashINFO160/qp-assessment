import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';



interface IOrderHistoryModel extends Model< InferAttributes<IOrderHistoryModel>, InferCreationAttributes<IOrderHistoryModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  orderId: number
  itemId: number
  quantity: number
}

interface IOrderHistory {
  orderId: number;
  itemId: number;
  quantity: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

export {
  IOrderHistoryModel,
  IOrderHistory
}