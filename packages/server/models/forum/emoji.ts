import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '../../db'

export interface EmojiAttributes {
  id: number
  unicode: string
}

export interface EmojiInstance
  extends Model<EmojiAttributes>,
    Optional<EmojiAttributes, 'id'> {}

const Emoji = sequelize.define<EmojiInstance>('emoji', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  unicode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Emoji
