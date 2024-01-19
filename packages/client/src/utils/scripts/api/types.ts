export type SignUpRequest = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
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

export type YandexApiError = { reason: string }
