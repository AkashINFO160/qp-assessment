import { DataTypes, Sequelize } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { ORDERMODEL } from './order';
import { INVENTORYMODEL } from './inventory';
import { BASEFIELD } from './baseFields';
import { IOrderHistoryModel } from 'interface';


const ORDERHISTORYMODEL = MYSQL_CONNECTION_SEQUELIZE.define<IOrderHistoryModel>('orderHistory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ...BASEFIELD
})

ORDERHISTORYMODEL.belongsTo(ORDERMODEL, { foreignKey: 'orderId' })
ORDERHISTORYMODEL.belongsTo(INVENTORYMODEL, { foreignKey: 'itemId' })

export {ORDERHISTORYMODEL}