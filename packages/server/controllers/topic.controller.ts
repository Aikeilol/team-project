import { Request, Response } from 'express'
import { Message, Topic } from '../models/forum'
import { returnNumber } from '../utils/return-number'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'
import { errorHandler } from '../utils/error-handler'

const getAllTopics = async (req: Request, res: Response) => {
  try {
    const forumId = Number(req.params.forumId)
    const page_number =
      returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
    const page_size = returnNumber(
      req.query.page_size as string,
      PAGE_SIZE_DEFAULT
    )

    const topics = await Topic.findAndCountAll({
      order: [['createdAt', 'desc']],
      where: {
        forum_id: forumId,
      },
      limit: page_size,
      offset: page_size * page_number,
    })

    for (const topic of topics.rows) {
      topic.message_count = await Message.count({
        where: { topic_id: topic.id },
      })
    }

    res.send(topics.rows)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const getOneTopic = async (req: Request, res: Response) => {
  try {
    const topicId = Number(req.params.id)
    const topic = await Topic.findByPk(topicId)

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
    errorHandler(res, error as Error)
  }
}

const updateTopic = async (req: Request, res: Response) => {
  try {
    const topicId = Number(req.params.id)
    const title = req.body?.title

    if (!title) {
      errorHandler(res, null, { message: `Title can not be empty`, code: 400 })
      return
    }

    const [num] = await Topic.update(
      { title },
      {
        where: { id: topicId },
      }
    )

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
    errorHandler(res, error as Error)
  }
}

const createTopic = async (req: Request, res: Response) => {
  try {
    const forumId = Number(req.params.forumId)
    const title = req.body?.title

    if (!title) {
      errorHandler(res, null, { message: `Title can not be empty`, code: 400 })
      return
    }

    const createdTopic = await Topic.create({
      forum_id: forumId,
      title,
      message_count: 0,
    })

    res.status(201).send(createdTopic)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const deleteTopic = async (req: Request, res: Response) => {
  try {
    const topicId = Number(req.params.id)

    const num = await Topic.destroy({
      where: { id: topicId },
    })

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
    errorHandler(res, error as Error)
  }
}

export { getAllTopics, getOneTopic, createTopic, updateTopic, deleteTopic }
