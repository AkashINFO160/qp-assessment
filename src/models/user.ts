import { DataTypes, Sequelize } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { ROLEMODEL } from './role';
import { BASEFIELD } from './baseFields';
import { IUserModel} from 'interface';

const USERMODEL = MYSQL_CONNECTION_SEQUELIZE.define<IUserModel>('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ...BASEFIELD
})

USERMODEL.belongsTo(ROLEMODEL, { foreignKey: 'roleId' })

export {USERMODEL}