import dotenv from 'dotenv';
dotenv.config()


const CONFIG: {
  PORT: string;
  LOGGER_LEVEL: string;
  CACHE_ENABLE: string;
  MYSQL_DATABASE_NAME: string;
  MYSQL_DATABASE_USERNAME: string;
  MYSQL_DATABASE_PASSWORD: string;
  MYSQL_DATABASE_HOST: string;
  SECRETKEY: string;
} = {
  PORT:process.env.PORT || '3000',
  LOGGER_LEVEL: process.env.LOGGER_LEVEL || '',
  CACHE_ENABLE: process.env.CACHE_ENABLE || '',
  MYSQL_DATABASE_NAME:process.env.MYSQL_DATABASE_NAME || '',
  MYSQL_DATABASE_USERNAME:process.env.MYSQL_DATABASE_USERNAME || '',
  MYSQL_DATABASE_PASSWORD: process.env.MYSQL_DATABASE_PASSWORD || '',
  MYSQL_DATABASE_HOST: process.env.MYSQL_DATABASE_HOST || '',
  SECRETKEY: process.env.SECRETKEY || '',
}

export {CONFIG}

