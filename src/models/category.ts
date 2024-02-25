import {  DataTypes } from 'sequelize';
import { MYSQL_CONNECTION_SEQUELIZE } from 'config';
import { BASEFIELD } from './baseFields';
import { REGEX } from 'regex';
import { ICategoryModel } from 'interface';

const { ALPHANUMERIC } = REGEX;



const CATEGORYMODEL = MYSQL_CONNECTION_SEQUELIZE.define<ICategoryModel>('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      customValidator(value: string) {
        if (!ALPHANUMERIC.test(value)) {
          throw new Error("name must be alphanumeric");
        }
      }
    }
  },
  ...BASEFIELD
}, {timestamps: true})

export {CATEGORYMODEL}