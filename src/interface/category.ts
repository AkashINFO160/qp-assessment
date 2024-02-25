import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';



interface ICategoryModel extends Model< InferAttributes<ICategoryModel>, InferCreationAttributes<ICategoryModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  name: string
}

interface IAddCategory {
  name: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

export {
  ICategoryModel,
  IAddCategory
}