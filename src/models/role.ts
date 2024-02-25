import { DataTypes, Sequelize } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { BASEFIELD } from './baseFields';
import {IRoleModel } from 'interface';

const ROLEMODEL = MYSQL_CONNECTION_SEQUELIZE.define<IRoleModel>('role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  ...BASEFIELD
})

export {ROLEMODEL}