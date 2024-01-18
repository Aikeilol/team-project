import { Forum, Message, Topic } from '../pages/Forum/types'

// Фейковый сервис

const totalForums = 3
const totalTopics = 10
const totalMessages = 15

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

const messages: Message[] = Array.from({ length: totalMessages }, (_, i) => ({
  id: i,
  topicId: getRandomInt(totalTopics),
  message: `Сообщение ${i}`,
  author: 'user',
  createDateTime: new Date('2022-11-02T23:37:18.220Z'),
}))

const topics: Topic[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  forumId: getRandomInt(totalForums),
  title: `Название топика ${i}`,
  messageCount: messages.filter(message => message.topicId === i).length,
  author: 'user',
  createDateTime: new Date('2022-11-02T23:37:18.220Z'),
}))

const forums: Forum[] = Array.from({ length: totalForums }, (_, i) => ({
  id: i,
  title: `Название форума ${i}`,
  topicCount: topics.filter(topic => topic.forumId === i).length,
  messageCount: messages.filter(message =>
    topics
      .filter(topic => topic.forumId === i)
      .map(topic => topic.id)
      .includes(message.topicId)
  ).length,
}))

class ForumService {
  getForums: () => Promise<{ items: Forum[] }> = async () => ({ items: forums })
  getTopics: (forumId: number) => Promise<{ title: string; items: Topic[] }> =
    async (forumId: number) => ({
      items: topics.filter(topic => topic.forumId === forumId),
      title: forums.find(forum => forum.id === forumId)?.title ?? '',
    })
  getMessages: (
    topicId: number
  ) => Promise<{ title: string; items: Message[] }> = async (
    topicId: number
  ) => ({
    items: messages.filter(message => message.topicId === topicId),
    title: topics.find(topic => topic.id === topicId)?.title ?? '',
  })

  addTopic: (forumId: number, title: string) => Promise<Topic> = async (
    forumId: number,
    title: string
  ) => {
    const newTopic = {
      id: topics.length,
      title,
      forumId,
      messageCount: 0,
      author: 'user',
      createDateTime: new Date(),
    }
    topics.push(newTopic)
    return newTopic
  }
  addMessage: (topicId: number, message: string) => Promise<Message> = async (
    topicId: number,
    message: string
  ) => {
    const newMessage = {
      id: messages.length,
      message,
      topicId,
      author: 'user',
      createDateTime: new Date(),
    }
    messages.push(newMessage)
    return newMessage
  }
}

export const forumService = new ForumService()
