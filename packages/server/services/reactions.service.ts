import { Emoji, User, Reaction } from '../models/forum'
import { createOrUpdateUser } from './user.service'
import { Op } from 'sequelize'
import { UserAttributes } from '../models/forum/user'

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
  reactionId?: number
}

export const saveReaction = async (
  user: UserAttributes,
  messageId: number,
  emojiId: number
): Promise<ReactionUpdate> => {
  const existingUser = await createOrUpdateUser(user)

  const reaction = await Reaction.findOne({
    where: { messageId, authorId: existingUser.id! },
  })

  if (!reaction) {
    const newReaction = new Reaction()
    newReaction.emojiId = emojiId
    newReaction.authorId = existingUser.id
    newReaction.messageId = messageId
    await newReaction.save()

    return {
      reactionId: newReaction.id,
    }
  }
  reaction.emojiId = emojiId
  await reaction.save()

  return {
    reactionId: reaction.id,
  }
}

export const deleteReaction = async (userId: number, messageId: number) => {
  const existingUser = await User.findOne({
    where: {
      id: userId,
    },
  })

  if (!existingUser) {
    return
  }
  const reaction = await Reaction.findOne({
    where: { messageId, authorId: existingUser.id! },
  })

  if (reaction) {
    await reaction.destroy()
  }
}

export default { getMessagesReactions, saveReaction, deleteReaction }
