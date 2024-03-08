import {
  createTopic,
  deleteTopic,
  getAllTopics,
  getOneTopic,
  updateTopic,
} from '../controllers/topic.controller'
import { getAllForums } from '../controllers/forum.controller'
import express, { Router } from 'express'
import {
  createMessage,
  deleteMessage,
  getMessages,
  updateMessage,
} from '../controllers/message.controller'
const forumRouter: Router = express.Router()

forumRouter.get('/forums', getAllForums)

forumRouter.get('/forums/:forumId/topics', getAllTopics)
forumRouter.post('/forums/:forumId/topics', createTopic)
forumRouter.get('/topics/:id', getOneTopic)
forumRouter.patch('/topics/:id', updateTopic)
forumRouter.delete('/topics/:id', deleteTopic)

forumRouter.get('/topics/:topicId/messages', getMessages)
forumRouter.get('/topics/:topicId/messages/:parentId', getMessages)
forumRouter.post('/topics/:topicId/messages', createMessage)
forumRouter.post('/topics/:topicId/messages/:parentId', createMessage)
forumRouter.patch('/messages/:id', updateMessage)
forumRouter.delete('/messages/:id', deleteMessage)

export default forumRouter
