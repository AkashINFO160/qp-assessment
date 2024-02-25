import {  DataTypes, Sequelize } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { CATEGORYMODEL} from './category';
import { BASEFIELD } from './baseFields';
import { IInventoryModel } from 'interface';
import { STATUS } from 'enum';

const INVENTORYMODEL = MYSQL_CONNECTION_SEQUELIZE.define<IInventoryModel>('inventory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('INSTOCK', 'OUTSTOCK'),
    allowNull: false,
    defaultValue: 'INSTOCK'
  },
  ...BASEFIELD
})

INVENTORYMODEL.belongsTo(CATEGORYMODEL, { foreignKey: 'categoryId' })

export {INVENTORYMODEL}