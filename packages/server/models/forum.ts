import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

const Forum = sequelize.define('forum', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
})

const Topic = sequelize.define('topic', {
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
})

const Message = sequelize.define('message', {
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
})

Forum.hasMany(Topic, { foreignKey: 'forum_id' })
Topic.belongsTo(Forum, { foreignKey: 'forum_id' })

Topic.hasMany(Message, { foreignKey: 'topic_id' })
Message.belongsTo(Topic, { foreignKey: 'topic_id' })

export { Forum, Topic, Message }
