import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../db'

interface ForumAttributes {
  id?: number
  title: string
  topic_count: number
  message_count: number
}

export interface ForumInstance
  extends Model<ForumAttributes>,
    ForumAttributes {}

const Forum = sequelize.define<ForumInstance>('forum', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  topic_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  message_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
})

export default Forum
