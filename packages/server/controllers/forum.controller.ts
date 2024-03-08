import { Request, Response } from 'express'
import { Forum, Message, Topic } from '../models/forum'
import { returnNumber } from '../utils/return-number'
import { PAGE_NUMBER_DEFAULT } from '../constants/constants'
import { PAGE_SIZE_DEFAULT } from '../constants/constants'
import { errorHandler } from '../utils/error-handler'
import { Op } from 'sequelize'

// Создать, обновить или удалить форум обычному пользователю нельзя

const getAllForums = async (req: Request, res: Response) => {
  try {
    const page_number =
      returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
    const page_size = returnNumber(
      req.query.page_size as string,
      PAGE_SIZE_DEFAULT
    )

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

    res.send(forums.rows)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

export { getAllForums }
