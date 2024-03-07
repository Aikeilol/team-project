import { NextFunction, Request, Response } from 'express'
import { Topic } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'

const getAllTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const forumId = req.params.forumId
  const page_number =
    returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(
    req.query.page_size as string,
    PAGE_SIZE_DEFAULT
  )

  Topic.findAndCountAll({
    order: [['createdAt', 'desc']],
    where: {
      forum_id: forumId,
    },
    limit: page_size,
    offset: page_size * page_number,
  })
    .then(topics => {
      res.send(topics.rows)
    })
    .catch(err => next(err))
}

const getOneTopic = async (req: Request, res: Response, next: NextFunction) => {
  const topicId = req.params.id
  Topic.findByPk(topicId)
    .then(topic => {
      if (topic) {
        res.send(topic)
      } else {
        res.status(404).send({
          message: `Cannot find Topic with id=${topicId}.`,
        })
      }
    })
    .catch(err => next(err))
}

const updateTopic = async (req: Request, res: Response, next: NextFunction) => {
  const topicId = req.params.id
  Topic.update(req.body, {
    where: { id: topicId },
  })
    .then(([num]) => {
      if (num === 1) {
        res.send({
          message: 'Topic was updated successfully',
        })
      } else {
        res.send({
          message: `Cannot update Topic with id=${topicId}. Maybe Topic was not found or body is empty!`,
        })
      }
    })
    .catch(err => next(err))
}

const createTopic = async (req: Request, res: Response, next: NextFunction) => {
  const forumId = req.params.forumId
  const title = req.body.title

  if (!forumId || !title) {
    res.status(400).send({
      message: 'Content or forumId can not be empty!',
    })
    return
  }

  const data = {
    id: Topic.length,
    forum_id: forumId,
    title,
  }

  Topic.create(data)
    .then(data => {
      res.send(data)
    })
    .catch(err => next(err))
}

const deleteTopic = async (req: Request, res: Response, next: NextFunction) => {
  const topicId = req.params.id

  Topic.destroy({
    where: { id: topicId },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Topic was deleted successfully!',
        })
      } else {
        res.status(404).send({
          message: `Cannot delete Topic with id=${topicId}`,
        })
      }
    })
    .catch(err => next(err))
}

export { getAllTopics, getOneTopic, createTopic, updateTopic, deleteTopic }
