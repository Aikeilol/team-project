import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../db'

interface TopicAttributes {
  id?: number
  forum_id: number
  title: string
  message_count: number
  author_id: number
}

export interface TopicInstance
  extends Model<TopicAttributes>,
    TopicAttributes {}

const Topic = sequelize.define<TopicInstance>('topic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  forum_id: {
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
  },
  message_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
  },
})

export default Topic
