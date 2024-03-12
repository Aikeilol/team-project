import { ILeader } from '../../../components/LeaderBoard/types'

export type SignUpRequest = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}
export type profileRequest = {
  first_name: string
  second_name: string
  login: string
  email: string
  display_name: string
  phone: string
}
export type passwordRequest = {
  oldPassword: string
  newPassword: string
}

export type UserId = {
  id: number
}

export type SignInRequest = {
  login: string
  password: string
}

export interface IUser {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
}

export interface IChangeUserProfile {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}
export interface IChangeUserPassword {
  oldPassword: string
  newPassword: string
}
export interface ILBAddUser {
  data: ILeader
  ratingFieldName: string
  teamName: string
}
export interface ILBTeam {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type YandexApiError = { reason: string }

export type Reaction = {
  emojiId: number
  unicode: string
  userEmails: string[]
}
export type MessagesReaction = {
  messageId: number
  reactions: Reaction[]
}

export type Emoji = {
  id: number
  unicode: string
}
