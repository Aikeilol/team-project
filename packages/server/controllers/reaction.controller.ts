import { Request, Response, NextFunction } from 'express'
import { errorHandler } from '../utils/errorHandler'
import { checkNumber } from '../utils/checkNumber'
import reactionService from '../services/reactions.service'

const getMessagesReactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { messageIds = [] } = req.query
    if (!Array.isArray(messageIds) || messageIds.some(id => !checkNumber(id))) {
      errorHandler(res, null, {
        message: 'messageIds should be an array of numbers',
        code: 400,
      })
    } else {
      const parsedMessageIds = messageIds.map(id => parseInt(id as string))
      const reactions = await reactionService.getMessagesReactions(
        parsedMessageIds
      )

      res.send(reactions)
    }
  } catch (error) {
    next(error)
  }
}

const saveReaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { emojiId, user, messageId, shouldAdd } = req.body || {}

    if (!checkNumber(emojiId) || !checkNumber(messageId)) {
      errorHandler(res, null, {
        message: 'emojiId and messageId should be numbers',
        code: 400,
      })
      return
    }

    const { email, displayName, avatar } = user || {}
    if (!email || !displayName) {
      errorHandler(res, null, {
        message: 'user should contain email and displayName',
        code: 400,
      })
      return
    }

    const result = await reactionService.saveReaction(
      parseInt(emojiId),
      { email, displayName, avatar },
      parseInt(messageId),
      shouldAdd
    )

    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

export { getMessagesReactions, saveReaction }
