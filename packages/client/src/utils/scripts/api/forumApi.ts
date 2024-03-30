import { slytherinApi } from '../constants'
import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'
import {
  Forum,
  Message,
  Request,
  Topic,
  Author,
} from '../../../pages/Forum/types'

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
  withCredentials: false,
}

export const getForums = async () => {
  try {
    return await slytherinApi.get<Forum[]>('/forums', config)
  } catch (err) {
    return console.error(err)
  }
}

export const createTopic = async (data: Request, author: Author) => {
  try {
    return await slytherinApi.post<Topic>(`/forums/${data.id}/topics`, {
      title: data.title,
      author: author,
    })
  } catch (err) {
    return console.error(err)
  }
}

export const getTopics = async (forumId: number) => {
  try {
    return await slytherinApi.get<Topic[]>(`/forums/${forumId}/topics`, config)
  } catch (err) {
    console.error(err)
  }
}

export const updateTopic = async (data: Request) => {
  try {
    return await slytherinApi.patch<Topic>(
      `/topics/${data.id}`,
      { title: data.title },
      config
    )
  } catch (err) {
    console.error(err)
  }
}

export const deleteTopic = async (topicId: number) => {
  try {
    return await slytherinApi.delete<Topic>(`/topics/${topicId}`, config)
  } catch (err) {
    console.error(err)
  }
}

export const getMessages = async (topicId: number) => {
  try {
    return await slytherinApi.get<Message[]>(
      `/topics/${topicId}/messages`,
      config
    )
  } catch (err) {
    console.error(err)
  }
}

export const createMessage = async (
  topicId: number,
  message: string,
  author: Author
) => {
  try {
    return await slytherinApi.post<Message>(
      `/topics/${topicId}/messages`,
      { message: message, author: author },
      config
    )
  } catch (err) {
    console.error(err)
  }
}

export const updateMessage = async (data: Request) => {
  try {
    return await slytherinApi.patch<Message>(
      `/messages/${data.id}`,
      { message: data.title },
      config
    )
  } catch (err) {
    console.error(err)
  }
}

export const deleteMessage = async (data: Request) => {
  try {
    return await slytherinApi.delete<Message>(`/messages/${data.id}`, config)
  } catch (err) {
    console.error(err)
  }
}
