import {  Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

interface IUserModel extends Model< InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {
  id: CreationOptional<number>;
  createdBy: CreationOptional<string>;
  updatedBy: CreationOptional<string>;
  createdAt: CreationOptional<number>;
  updatedAt: CreationOptional<number>;
  roleId: string;
  name: string;
  email: string;
}

interface IAddUser {
  roleId: string;
  name: string;
  email: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: number;
  updatedAt?: number;
  [key: string]: string | number | undefined;
}

interface IGetUser {
  id ?: number;
  email?: string;
  [key: string]: string | number | undefined;
}

export {
  IUserModel,
  IAddUser,
  IGetUser
}