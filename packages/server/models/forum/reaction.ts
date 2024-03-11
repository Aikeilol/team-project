import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../../db'
import User, { UserInstance } from './user'
import Emoji, { EmojiInstance } from './emoji'
import Message from './message'

interface ReactionAttributes {
  id: number
  emojiId: number
  messageId: number
  authorId: number
  user?: UserInstance
  emoji?: EmojiInstance
}

export interface ReactionInstance
  extends Model<ReactionAttributes>,
    Optional<ReactionAttributes, 'id'> {}

const Reaction = sequelize.define<ReactionInstance>('reaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  emojiId: {
    type: DataTypes.INTEGER,
    references: {
      model: Emoji,
      key: 'id',
    },
  },
  messageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Message,
      key: 'id',
    },
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
})

Reaction.belongsTo(Emoji, { foreignKey: 'authorId', as: 'author' })

export default Reaction
