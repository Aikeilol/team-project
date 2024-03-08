import { Request, Response } from 'express'
import { errorHandler } from '../utils/errorHandler'
import { UserInstance } from '../models/forum/user'
import {
  updateOneMessage,
  createOneMessage,
  deleteOneMessage,
  getAllMessages,
} from '../services/message.service'

const getMessages = async (req: Request, res: Response) => {
  try {
    const { topicId, parentId } = req.params
    const messages = await getAllMessages(
      topicId,
      parentId,
      <string>req.query.page_number,
      <string>req.query.page_size
    )

    res.send(messages)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const updateMessage = async (req: Request, res: Response) => {
  try {
    const messageId = req.params.id
    const message = req.body.message

    if (!message) {
      errorHandler(res, null, { message: 'Message is empty', code: 400 })
      return
    }

    const num = await updateOneMessage(messageId, message)

    if (num === 1) {
      res.status(201).send({
        message: 'Message was updated successfully',
      })
    } else {
      errorHandler(res, null, {
        message: `Cannot update Message with id=${messageId}. Message was not found`,
        code: 404,
      })
    }
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const createMessage = async (req: Request, res: Response) => {
  const { message, author }: { message: string; author: UserInstance } =
    req.body
  const { topicId, parentId } = req.params

  try {
    if (!message) {
      errorHandler(res, null, { message: 'Message is empty', code: 400 })
      return
    }

    const newMessage = await createOneMessage(
      message,
      author,
      topicId,
      parentId
    )

    res.status(201).send(newMessage)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const deleteMessage = async (req: Request, res: Response) => {
  try {
    const messageId = req.params.id

    const num = await deleteOneMessage(messageId)

    if (num == 1) {
      res.send({
        message: 'Message was deleted successfully!',
      })
    } else {
      errorHandler(res, null, {
        message: `Cannot delete Message with id=${messageId}`,
        code: 404,
      })
    }
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

export { getMessages, updateMessage, createMessage, deleteMessage }
