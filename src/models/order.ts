import {  DataTypes, Sequelize } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { BASEFIELD } from './baseFields';
import { USERMODEL } from './user';
import { IOrderModel } from 'interface';

const ORDERMODEL = MYSQL_CONNECTION_SEQUELIZE.define<IOrderModel>('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ...BASEFIELD
})

ORDERMODEL.belongsTo(USERMODEL, { foreignKey: 'userId' })

export {ORDERMODEL}