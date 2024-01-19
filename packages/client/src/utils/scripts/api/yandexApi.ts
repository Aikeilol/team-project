import showAlert from '../showAlert'
import {
  IUser,
  SignInRequest,
  SignUpRequest,
  UserId,
  YandexApiError,
} from './types'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios'

const yandexApi: AxiosInstance = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
})

const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
  withCredentials: true,
}

export const signUp = async (data: SignUpRequest) => {
  try {
    return (await yandexApi.post(
      '/auth/signup',
      data,
      config
    )) as AxiosResponse<UserId>
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const signIn = async (data: SignInRequest) => {
  try {
    return (await yandexApi.post('/auth/signin', data, config)) as AxiosResponse
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const getUser = async () => {
  try {
    return (await yandexApi
      .get('/auth/user', config)
      .then(res => res)) as AxiosResponse<IUser>
  } catch (error: any) {
    console.log(error)
  }
}
