import { Emoji, User, Reaction } from '../models/forum'
import { createOrUpdateUser } from './user.service'
import { Op } from 'sequelize'

type MessagesReactions = {
  messageId: number
  reactions: { emojiId: number; unicode: string; userEmails: string[] }[]
}[]

export const getMessagesReactions = async (messageIds: number[]) => {
  const reactions = await Reaction.findAll({
    where: { messageId: { [Op.in]: messageIds } },
    include: [User, Emoji],
  })

  return reactions.reduce((acc, reactionRaw) => {
    const reaction = reactionRaw.dataValues
    let messageReaction = acc.find(
      item => item.messageId === reaction.messageId
    )
    if (!messageReaction) {
      messageReaction = {
        messageId: reaction.messageId,
        reactions: [
          {
            emojiId: reaction.emojiId,
            unicode: reaction.emoji!.dataValues.unicode,
            userEmails: [reaction.user!.dataValues.email],
          },
        ],
      }
      acc.push(messageReaction)
    } else {
      let emojiReaction = messageReaction.reactions.find(
        item => item.emojiId === reaction.emojiId
      )
      if (!emojiReaction) {
        emojiReaction = {
          emojiId: reaction.emojiId,
          unicode: reaction.emoji!.dataValues.unicode,
          userEmails: [reaction.user!.dataValues.email],
        }
        messageReaction.reactions.push(emojiReaction)
      } else {
        emojiReaction.userEmails.push(reaction.user!.dataValues.email)
      }
    }

    return acc
  }, [] as MessagesReactions)
}

type ReactionUpdate = {
  wasRemoved?: boolean
  wasUpdated?: boolean
  wasCreated?: boolean
  reactionId?: number
}

export const saveReaction = async (
  emojiId: number,
  user: {
    email: string
    displayName: string
    avatar: string | null
  },
  messageId: number,
  shouldAdd: boolean
): Promise<ReactionUpdate> => {
  const existingUser = await createOrUpdateUser(user)

  const reaction = await Reaction.findOne({
    where: { messageId, authorId: existingUser.id! },
  })

  if (shouldAdd) {
    if (!reaction) {
      const newReaction = new Reaction()
      newReaction.emojiId = emojiId
      newReaction.authorId = existingUser.id
      newReaction.messageId = messageId
      await newReaction.save()

      return {
        wasCreated: true,
        reactionId: newReaction.id,
      }
    } else {
      reaction.emojiId = emojiId
      await reaction.save()

      return {
        wasUpdated: true,
        reactionId: reaction.id,
      }
    }
  } else if (reaction) {
    await reaction.destroy()

    return {
      wasRemoved: true,
    }
  }
  return {
    wasUpdated: false,
  }
}

export default { getMessagesReactions, saveReaction }
