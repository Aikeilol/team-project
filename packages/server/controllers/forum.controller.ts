import { NextFunction, Request, Response } from 'express'
import { getAllForums } from '../services/forum.service'

// Создать, обновить или удалить форум обычному пользователю нельзя

const getForums = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const forums = await getAllForums(
      <string>req.query.page_number,
      <string>req.query.page_size
    )
    res.send(forums)
  } catch (error) {
    next(error)
  }
}

export { getForums }
