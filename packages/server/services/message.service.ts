import { Message } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'
import User, { UserAttributes } from '../models/forum/user'
import { createOrUpdateUser } from './user.service'

export const getAllMessages = async (
  topicId: string,
  parentId: string,
  pageNumber: string,
  pageSize: string
) => {
  const page_number = returnNumber(pageNumber, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(pageSize, PAGE_SIZE_DEFAULT)

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
      },
    ],
  })

  for (const message of messages.rows) {
    message.has_children = !!(await Message.findOne({
      where: { parent_id: message.id },
    }))
  }

  return messages.rows
}

export const updateOneMessage = async (
  messageIdStr: string,
  message: string
) => {
  const messageId = Number(messageIdStr)

  const [num] = await Message.update(
    { message },
    {
      where: { id: messageId },
    }
  )

  return num
}

export const createOneMessage = async (
  message: string,
  author: UserAttributes,
  topicId: string,
  parentId: string
) => {
  const user = await createOrUpdateUser(author)

  const createdMessage = await Message.create({
    message,
    topic_id: Number(topicId),
    parent_id: isNaN(parseInt(parentId)) ? null : parseInt(parentId),
    author_id: user.id,
    has_children: false,
  })

  return createdMessage
}

export const deleteOneMessage = async (messageIdStr: string) => {
  const messageId = Number(messageIdStr)

  const num = await Message.destroy({
    where: { id: messageId },
  })

  return num
}
