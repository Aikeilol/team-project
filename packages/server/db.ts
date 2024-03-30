import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres', // 'mysql', 'sqlite', 'mariadb', 'mssql'
}

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions)

export async function dbConnect() {
  try {
    await sequelize.authenticate() // Проверка аутентификации в БД
    await sequelize.sync() // Синхронизация базы данных
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
