import Forum from './forum'
import Message from './message'
import Topic from './topic'
import User from './user'
import Emoji from './emoji'
import Reaction from './reaction'

Forum.hasMany(Topic, { foreignKey: 'forum_id' })
Topic.belongsTo(Forum, { foreignKey: 'forum_id' })

Topic.hasMany(Message, { foreignKey: 'topic_id' })
Message.belongsTo(Topic, { foreignKey: 'topic_id' })

User.hasMany(Message, { foreignKey: 'author_id' })
Message.belongsTo(User, { foreignKey: 'author_id' })

User.hasMany(Topic, { foreignKey: 'author_id' })
Topic.belongsTo(User, { as: 'author', foreignKey: 'author_id' })

Emoji.hasMany(Reaction, { foreignKey: 'emojiId' })
Reaction.belongsTo(Emoji, { foreignKey: 'emojiId' })

User.hasMany(Reaction, { foreignKey: 'authorId' })
Reaction.belongsTo(User, { foreignKey: 'authorId' })

Message.hasMany(Reaction, { foreignKey: 'messageId' })
Reaction.belongsTo(Message, { foreignKey: 'messageId' })

export { Forum, Topic, Message, User, Emoji, Reaction }
