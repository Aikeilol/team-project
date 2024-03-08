/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
