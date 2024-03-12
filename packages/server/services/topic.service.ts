import { Message, Topic } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT, PAGE_SIZE_DEFAULT } from '../constants/constants'
import { createOrUpdateUser } from './user.service'
import User, { UserAttributes } from '../models/forum/user'

export const getAllTopics = async (
  forumIdStr: string,
  pageNumber: string,
  pageSize: string
) => {
  const forumId = Number(forumIdStr)

  const page_number = returnNumber(pageNumber, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(pageSize, PAGE_SIZE_DEFAULT)

  const topics = await Topic.findAndCountAll({
    order: [['createdAt', 'desc']],
    where: {
      forum_id: forumId,
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

  for (const topic of topics.rows) {
    const message_count = await Message.count({
      where: { topic_id: topic.id },
    })

    topic.message_count = message_count
  }

  return topics.rows
}

export const getOneTopic = async (topicIdStr: string) => {
  const topicId = Number(topicIdStr)
  const topic = await Topic.findByPk(topicId, {
    attributes: { exclude: ['author_id'] },
    include: [
      {
        model: User,
        as: 'author',
      },
    ],
  })

  return topic
}

export const updateOneTopic = async (topicIdStr: string, title: string) => {
  const topicId = Number(topicIdStr)

  const [num] = await Topic.update(
    { title },
    {
      where: { id: topicId },
    }
  )

  return num
}

export const createOneTopic = async (
  forumIdStr: string,
  title: string,
  author: UserAttributes
) => {
  const forumId = Number(forumIdStr)

  const user = await createOrUpdateUser(author)

  const createdTopic = await Topic.create({
    forum_id: forumId,
    title,
    message_count: 0,
    author_id: user.id,
  })

  return createdTopic
}

export const deleteOneTopic = async (topicIdStr: string) => {
  const topicId = Number(topicIdStr)

  const num = await Topic.destroy({
    where: { id: topicId },
  })

  return num
}
