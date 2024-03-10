import Forum from './forum'
import Message from './message'
import Topic from './topic'
import User from './user'

Forum.hasMany(Topic, { foreignKey: 'forum_id' })
Topic.belongsTo(Forum, { foreignKey: 'forum_id' })

Topic.hasMany(Message, { foreignKey: 'topic_id' })
Message.belongsTo(Topic, { foreignKey: 'topic_id' })

User.hasMany(Message, { foreignKey: 'author_id' })
Message.belongsTo(User, { as: 'author', foreignKey: 'author_id' })

User.hasMany(Topic, { foreignKey: 'author_id' })
Topic.belongsTo(User, { as: 'author', foreignKey: 'author_id' })

export { Forum, Topic, Message, User }
