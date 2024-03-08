import { Request, Response } from 'express'
import { Message, User } from '../models/forum'
import { returnNumber } from '../utils/return-number'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'
import { errorHandler } from '../utils/error-handler'
import { UserInstance } from '../models/forum/user'

const getMessages = async (req: Request, res: Response) => {
  try {
    const { topicId, parentId } = req.params

    const page_number =
      returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
    const page_size = returnNumber(
      req.query.page_size as string,
      PAGE_SIZE_DEFAULT
    )

    const messages = await Message.findAndCountAll({
      order: [['createdAt', 'desc']],
      where: {
        topic_id: Number(topicId),
        parent_id: isNaN(parseInt(parentId)) ? null : parseInt(parentId),
      },
      limit: page_size,
      offset: page_size * page_number,
      attributes: { exclude: ['author_id'] },
      include: [
        {
          model: User,
          as: 'author',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    })

    for (const message of messages.rows) {
      message.has_children = !!(await Message.findOne({
        where: { parent_id: message.id },
      }))
    }

    res.send(messages.rows)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const updateMessage = async (req: Request, res: Response) => {
  try {
    const messageId = Number(req.params.id)
    const message = req.body.message

    if (!message) {
      errorHandler(res, null, { message: 'Message is empty', code: 400 })
      return
    }

    const [num] = await Message.update(req.body, {
      where: { id: messageId },
    })

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
      throw new Error('Message cannot be empty!')
    }

    const authorId = Number(author.id)

    let user = await User.findOne({
      where: {
        id: authorId,
      },
    })

    if (!user) {
      user = await User.create({ ...author, id: authorId })
    } else {
      if (
        user.display_name !== author.display_name ||
        user.avatar !== author.avatar
      ) {
        await User.update(
          { display_name: author.display_name, avatar: author.avatar },
          {
            where: {
              id: authorId,
            },
          }
        )
      }
    }

    const createdMessage = await Message.create({
      message,
      topic_id: Number(topicId),
      parent_id: isNaN(parseInt(parentId)) ? null : parseInt(parentId),
      author_id: authorId,
      has_children: false,
    })

    res.status(201).send(createdMessage)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

const deleteMessage = async (req: Request, res: Response) => {
  try {
    const messageId = Number(req.params.id)

    const num = await Message.destroy({
      where: { id: messageId },
    })

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
