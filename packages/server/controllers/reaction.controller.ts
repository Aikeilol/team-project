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
      return
    }

    const parsedMessageIds = messageIds.map(id => parseInt(id as string))
    const reactions = await reactionService.getMessagesReactions(
      parsedMessageIds
    )

    res.send(reactions)
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
    const { emojiId, user, messageId } = req.body || {}

    if (!checkNumber(emojiId) || !checkNumber(messageId)) {
      errorHandler(res, null, {
        message: 'emojiId and messageId should be numbers',
        code: 400,
      })
      return
    }

    const { id, email, display_name, avatar } = user || {}
    if (!email || !display_name) {
      errorHandler(res, null, {
        message: 'user should contain email and display_name',
        code: 400,
      })
      return
    }

    if (!id || !checkNumber(id)) {
      errorHandler(res, null, {
        message: `user's id should be number`,
        code: 400,
      })
      return
    }

    const result = await reactionService.saveReaction(
      { id: parseInt(id), email, display_name, avatar },
      parseInt(messageId),
      parseInt(emojiId)
    )

    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

const deleteReaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, messageId } = req.body || {}

    if (!checkNumber(messageId)) {
      errorHandler(res, null, {
        message:
          ' messageId should be numbers and userEmail should be a not empty string',
        code: 400,
      })
      return
    }

    if (!userId || !checkNumber(userId)) {
      errorHandler(res, null, {
        message: `userId should be number`,
        code: 400,
      })
      return
    }

    await reactionService.deleteReaction(parseInt(userId), parseInt(messageId))

    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

export { getMessagesReactions, saveReaction, deleteReaction }
