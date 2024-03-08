import { Forum, Message, Topic } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT } from '../constants/constants'
import { PAGE_SIZE_DEFAULT } from '../constants/constants'
import { Op } from 'sequelize'

const allForums = async (pageNumber: string, pageSize: string) => {
  const page_number = returnNumber(pageNumber, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(pageSize, PAGE_SIZE_DEFAULT)

  const forums = await Forum.findAndCountAll({
    order: [['createdAt', 'desc']],
    limit: page_size,
    offset: page_size * page_number,
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })

  for (const forum of forums.rows) {
    const topicsId = await Topic.findAll({
      where: { forum_id: forum.id },
      attributes: ['id'],
    })
    const topicIdsArray = topicsId.map(topic => topic.id) as number[]
    let message_count = 0

    if (topicIdsArray) {
      message_count = await Message.count({
        where: { topic_id: { [Op.in]: topicIdsArray } },
      })
    }

    forum.topic_count = topicsId.length
    forum.message_count = message_count
  }

  return forums.rows
}

export { allForums }
