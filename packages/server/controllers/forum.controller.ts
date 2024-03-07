import { NextFunction, Request, Response } from 'express'
import { Forum } from '../models/forum'
import { returnNumber } from '../utils/returnNumber'
import { PAGE_NUMBER_DEFAULT } from '../constants/constants'
import { PAGE_SIZE_DEFAULT } from '../constants/constants'

// Создать, обновить или удалить форум обычному пользователю нельзя

const getAllForums = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page_number =
    returnNumber(req.query.page_number as string, PAGE_NUMBER_DEFAULT) - 1
  const page_size = returnNumber(
    req.query.page_size as string,
    PAGE_SIZE_DEFAULT
  )

  Forum.findAndCountAll({
    order: [['createdAt', 'desc']],
    limit: page_size,
    offset: page_size * page_number,
  })
    .then(forums => {
      res.send(forums.rows)
    })
    .catch(err => next(err))
}

const getOneForum = async (req: Request, res: Response, next: NextFunction) => {
  const forumId = req.params.id
  Forum.findByPk(forumId)
    .then(forum => {
      if (forum) {
        res.send(forum)
      } else {
        res.status(404).send({
          message: `Cannot find Forum with id=${forumId}.`,
        })
      }
    })
    .catch(err => next(err))
}

export { getAllForums, getOneForum }
