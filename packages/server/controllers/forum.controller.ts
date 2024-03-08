import { Request, Response } from 'express'
import { errorHandler } from '../utils/errorHandler'
import { allForums } from '../services/forum.service'

// Создать, обновить или удалить форум обычному пользователю нельзя

const getAllForums = async (req: Request, res: Response) => {
  try {
    const forums = await allForums(
      <string>req.query.page_number,
      <string>req.query.page_size
    )
    res.send(forums)
  } catch (error) {
    errorHandler(res, error as Error)
  }
}

export { getAllForums }
