import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';



interface IInventoryModel extends Model< InferAttributes<IInventoryModel>, InferCreationAttributes<IInventoryModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  categoryId: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  status: string;
}

interface IAddInventory {
  id?: number,
  categoryId: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  status: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

interface IUpdateInventory {
  categoryId?: number;
  name?: string;
  description?: string;
  quantity?: number;
  price?: number;
  status?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

interface IGetInventory { 

  id: number[];
  [key: string]: number[];

}


export {
  IInventoryModel,
  IAddInventory,
  IUpdateInventory,
  IGetInventory
}