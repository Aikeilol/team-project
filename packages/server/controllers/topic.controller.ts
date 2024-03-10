import { Request, Response, NextFunction } from 'express'
import { Message } from '../models/forum'
import { errorHandler } from '../utils/errorHandler'
import {
  createOneTopic,
  deleteOneTopic,
  getAllTopics,
  getOneTopic,
  updateOneTopic,
} from '../services/topic.service'

const getTopics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const forumId = req.params.forumId
    const topics = await getAllTopics(
      forumId,
      <string>req.query.page_number,
      <string>req.query.page_size
    )

    res.send(topics)
  } catch (error) {
    next(error)
  }
}

const getTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topicId = req.params.id
    const topic = await getOneTopic(topicId)

    if (topic) {
      topic.message_count = await Message.count({
        where: { topic_id: topic.id },
      })
      res.send(topic)
    } else {
      errorHandler(res, null, {
        message: `Cannot find Topic with id=${topicId}.`,
        code: 404,
      })
    }
  } catch (error) {
    next(error)
  }
}

const updateTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topicId = req.params.id
    const title = req.body?.title

    if (!title) {
      errorHandler(res, null, { message: `Title can not be empty`, code: 400 })
      return
    }

    const num = await updateOneTopic(topicId, title)

    if (num === 1) {
      res.send({
        message: 'Topic was updated successfully',
      })
    } else {
      errorHandler(res, null, {
        message: `Cannot update Topic with id=${topicId}. Topic was not found`,
        code: 404,
      })
    }
  } catch (error) {
    next(error)
  }
}

const createTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const forumId = req.params.forumId
    const { title, author } = req.body

    if (!title) {
      errorHandler(res, null, { message: `Title can not be empty`, code: 400 })
      return
    }

    const createdTopic = await createOneTopic(forumId, title, author)

    res.status(201).send(createdTopic)
  } catch (error) {
    next(error)
  }
}

const deleteTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topicId = req.params.id
    const num = await deleteOneTopic(topicId)

    if (num == 1) {
      res.send({
        message: 'Topic was deleted successfully!',
      })
    } else {
      errorHandler(res, null, {
        message: `Cannot delete Topic with id=${topicId}. Topic was not found`,
        code: 404,
      })
    }
  } catch (error) {
    next(error)
  }
}

export { getTopics, getTopic, createTopic, updateTopic, deleteTopic }
