import {  DataTypes, Sequelize } from 'sequelize';


const BASEFIELD = {
  createdBy: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: 'SYSTEM'
  },
  updatedBy: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: 'SYSTEM'
  },
  createdAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: () =>  Date.now()
  },
  updatedAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: () =>  Date.now(),
  }
}

export {BASEFIELD}