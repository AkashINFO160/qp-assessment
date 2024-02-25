import { Sequelize } from 'sequelize';
import { CONFIG } from 'config';

const {
  MYSQL_DATABASE_PASSWORD,
  MYSQL_DATABASE_USERNAME,
  MYSQL_DATABASE_NAME,
  MYSQL_DATABASE_HOST
} = CONFIG;


const MYSQL_CONNECTION_SEQUELIZE: Sequelize = new Sequelize(
  MYSQL_DATABASE_NAME,
  MYSQL_DATABASE_USERNAME,
  MYSQL_DATABASE_PASSWORD,{
    host: MYSQL_DATABASE_HOST,
    dialect: 'mysql',
    define: {
      freezeTableName: true
    },
  },
)

export { MYSQL_CONNECTION_SEQUELIZE }