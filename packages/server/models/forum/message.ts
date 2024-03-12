import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../db'

interface MessageAttributes {
  id?: number
  parent_id: number | null
  topic_id: number
  message: string
  author_id: number
  has_children: boolean
}

export interface MessageInstance
  extends Model<MessageAttributes>,
    MessageAttributes {}

const Message = sequelize.define<MessageInstance>('message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  topic_id: {
    type: DataTypes.INTEGER,
  },
  message: {
    type: DataTypes.STRING,
  },
  author_id: {
    type: DataTypes.INTEGER,
  },
  has_children: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

export default Message
