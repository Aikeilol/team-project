import { MessagesReaction, YandexApiError, Emoji } from './types'
import { AxiosError, AxiosResponse } from 'axios'
import showAlert from '../showAlert'
import { slytherinApi, config } from '../constants'
import { User } from '../../../store/slices/userSlice'

export const getEmojis = async () => {
  try {
    return (await slytherinApi.get('/forum/emojis', config)) as AxiosResponse<
      Emoji[]
    >
  } catch (err) {
    console.error(err)
  }
}

export const getMessagesReactions = async (messageIds: number[]) => {
  try {
    return (await slytherinApi.get('/forum/reactions/messages', {
      ...config,
      params: { messageIds },
    })) as AxiosResponse<MessagesReaction[]>
  } catch (error) {
    return console.error(error)
  }
}

export const saveReaction = async (
  user: User,
  emojiId: number,
  messageId: number
) => {
  try {
    const userData = {
      id: user!.id,
      email: user!.email,
      display_name: user!.display_name,
      avatar: user!.avatar,
    }

    return (await slytherinApi.put(
      '/forum/reactions',
      {
        emojiId,
        user: userData,
        messageId,
      },
      config
    )) as AxiosResponse
  } catch (err) {
    console.log(err)
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const deleteReaction = async (user: User, messageId: number) => {
  try {
    return (await slytherinApi.delete('/forum/reactions', {
      ...config,
      data: {
        userId: user!.id,
        messageId,
      },
    })) as AxiosResponse
  } catch (err) {
    console.log(err)
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}
