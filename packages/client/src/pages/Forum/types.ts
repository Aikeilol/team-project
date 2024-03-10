export interface Author {
  id: number
  avatar: string
  display_name: string
}
export interface Topic {
  id: number
  forum_id: number
  title: string
  message_count: number
  createdAt: string
  updatedAt: string
  author: Author
}

export interface Forum {
  id: number
  title: string
  topic_count: number
  message_count: number
}

export interface Message {
  id: number
  parent_id: any
  topic_id: number
  message: string
  has_children: boolean
  createdAt: string
  updatedAt: string
  author: Author
}

export interface Request {
  id: number
  title: string
}
