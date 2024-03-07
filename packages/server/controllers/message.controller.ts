import { NextFunction, Request, Response } from 'express'
import { Message } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'

const getMessages = async (req: Request, res: Response, next: NextFunction) => {
  const topicId = req.params.topicId
  const { parentId } = req.query

  const page_number =
    returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(
    req.query.page_size as string,
    PAGE_SIZE_DEFAULT
  )

  Message.findAndCountAll({
    order: [['createdAt', 'desc']],
    where: {
      topic_id: topicId,
      parent_id: parentId,
    },
    limit: page_size,
    offset: page_size * page_number,
  })
    .then(messages => {
      res.send(messages.rows)
    })
    .catch(err => next(err))
}

const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const messageId = req.params.id
  Message.update(req.body, {
    where: { id: messageId },
  })
    .then(([num]) => {
      if (num === 1) {
        res.send({
          message: 'Message was updated successfully',
        })
      } else {
        res.send({
          message: `Cannot update Message with id=${messageId}. Maybe Message was not found or body is empty!`,
        })
      }
    })
    .catch(err => next(err))
}

const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = req.body.message
  const { topicId, parentId } = req.params

  if (!message || !topicId) {
    res.status(400).send({
      message: 'Message or topicId can not be empty!',
    })
    return
  }

  Message.create({ message, topic_id: topicId, parentId: parentId })
    .then(message => {
      res.send(message)
    })
    .catch(err => next(err))
}

const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const messageId = req.params.id

  Message.destroy({
    where: { id: messageId },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Message was deleted successfully!',
        })
      } else {
        res.status(404).send({
          message: `Cannot delete Message with id=${messageId}`,
        })
      }
    })
    .catch(err => next(err))
}

export { getMessages, updateMessage, createMessage, deleteMessage }
