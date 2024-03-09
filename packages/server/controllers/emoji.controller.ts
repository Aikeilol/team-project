import { Request, Response, NextFunction } from 'express'
import emojiService from '../services/emoji.service'

const getEmojis = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const emojis = await emojiService.getEmojis()

    res.send(emojis)
  } catch (error) {
    next(error)
  }
}

export { getEmojis }
