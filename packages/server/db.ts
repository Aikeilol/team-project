import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: +(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres', // 'mysql', 'sqlite', 'mariadb', 'mssql'
}

import { Emoji, User, Forum, Topic, Message, Reaction } from './models/forum'

export const test = async () => {
  const ems = [
    '😀',
    '😎',
    '👍',
    '👎',
    '😍',
    '🤩',
    '🤔',
    '😡',
    '😢',
    '😱',
    '😂',
    '😐',
  ]
  for (let i = 1; i < ems.length + 1; i++) {
    const e = new Emoji()
    e.unicode = ems[i - 1]
    await e.save()
  }

  const u1 = new User()
  u1.avatar = 'avatar1'
  u1.display_name = 'display_name1'
  u1.email = 'user'
  await u1.save()

  const u2 = new User()
  u2.avatar = 'avatar2'
  u2.display_name = 'display_name2'
  u2.email = 'nia@yandex.ru' //marchenko.euge
  await u2.save()

  const f = new Forum()
  f.title = 'forum'
  f.topic_count = 1
  f.message_count = 2
  await f.save()

  const t = new Topic()
  t.id = 1
  t.title = 'topic'
  t.forum_id = 1
  t.message_count = 2
  await t.save()

  for (let i = 1; i < 10; i++) {
    const m = new Message()
    m.id = i
    m.topic_id = 1
    m.message = `message${i}`
    m.author_id = u1.id!
    await m.save()
  }

  for (let i = 1; i < 10; i++) {
    const r = new Reaction()
    r.emojiId = i
    r.messageId = i
    r.authorId = u1.id!
    await r.save()
  }
}

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions)

export async function dbConnect() {
  try {
    await sequelize.authenticate() // Проверка аутентификации в БД
    // await sequelize.sync() // Синхронизация базы данных
    // await test()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
