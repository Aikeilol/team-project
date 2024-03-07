import {
  createTopic,
  deleteTopic,
  getAllTopics,
  getOneTopic,
  updateTopic,
} from '../controllers/topic.controller'
import { getAllForums, getOneForum } from '../controllers/forum.controller'
import express, { Router } from 'express'
import {
  createMessage,
  deleteMessage,
  getMessages,
  updateMessage,
} from '../controllers/message.controller'
const forumRouter: Router = express.Router()

forumRouter.get('/', getAllForums)
forumRouter.get('/:id', getOneForum)

forumRouter.get('/:forumId/topics', getAllTopics)
forumRouter.get('/topics/:id', getOneTopic)
forumRouter.post('/topics', createTopic)
forumRouter.patch('/topics/:id', updateTopic)
forumRouter.delete('/topics/:id', deleteTopic)

forumRouter.get('/topics/:topicId/messages', getMessages)
forumRouter.post('/messages', createMessage)
forumRouter.patch('/messages/:id', updateMessage)
forumRouter.delete('/messages/:id', deleteMessage)

export default forumRouter
