import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';



interface IRoleModel extends Model< InferAttributes<IRoleModel>, InferCreationAttributes<IRoleModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  name: string
}

interface IRole {
  name: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

export {
  IRoleModel,
  IRole
}