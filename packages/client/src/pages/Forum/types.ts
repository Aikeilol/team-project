export interface Forum {
  id: number
  title: string
  topicCount: number
  messageCount: number
}

export interface Topic {
  id: number
  forumId: number
  title: string
  messageCount: number
  author: string
  createDateTime: Date
}

export interface Message {
  id: number
  topicId: number
  message: string
  author: string
  createDateTime: Date
}
