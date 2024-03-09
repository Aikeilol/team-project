import {
  createTopic,
  deleteTopic,
  getTopics,
  getTopic,
  updateTopic,
} from '../controllers/topic.controller'
import { getForums } from '../controllers/forum.controller'
import express, { Router } from 'express'
import {
  createMessage,
  deleteMessage,
  getMessages,
  updateMessage,
} from '../controllers/message.controller'
import { getEmojis } from '../controllers/emoji.controller'
import {
  getMessagesReactions,
  saveReaction,
} from '../controllers/reaction.controller'
const forumRouter: Router = express.Router()

forumRouter.get('/forums', getForums)

forumRouter.get('/forums/:forumId/topics', getTopics)
forumRouter.post('/forums/:forumId/topics', createTopic)
forumRouter.get('/topics/:id', getTopic)
forumRouter.patch('/topics/:id', updateTopic)
forumRouter.delete('/topics/:id', deleteTopic)

forumRouter.get('/topics/:topicId/messages', getMessages)
forumRouter.get('/topics/:topicId/messages/:parentId', getMessages)
forumRouter.post('/topics/:topicId/messages', createMessage)
forumRouter.post('/topics/:topicId/messages/:parentId', createMessage)
forumRouter.patch('/messages/:id', updateMessage)
forumRouter.delete('/messages/:id', deleteMessage)

forumRouter.get('/emojis', getEmojis)

forumRouter.get('/reactions', getMessagesReactions)
forumRouter.post('/reactions', saveReaction)

export default forumRouter
