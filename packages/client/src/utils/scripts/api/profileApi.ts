import {
  IChangeUserPassword,
  IChangeUserProfile,
  UserId,
  YandexApiError,
} from './types'
import { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from 'axios'
import showAlert from '../showAlert'
import { yandexApi } from './yandexApi'
import { config } from '../constants'

export const changeUserProfile = async (data: IChangeUserProfile) => {
  try {
    return (await yandexApi.put('/user/profile', data, config)) as AxiosResponse
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const changeUserAvatar = async (data: FormData) => {
  try {
    return (await yandexApi.put('/user/profile/avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      } as RawAxiosRequestHeaders,
      withCredentials: true,
    })) as AxiosResponse
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const changeUserPassword = async (data: IChangeUserPassword) => {
  try {
    return (await yandexApi.put(
      '/user/password',
      data,
      config
    )) as AxiosResponse
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}

export const logOut = async () => {
  try {
    return (await yandexApi.post(
      '/auth/logout',
      {},
      config
    )) as AxiosResponse<UserId>
  } catch (err) {
    const error = err as AxiosError<YandexApiError>
    const message = error.response?.data.reason as string
    showAlert(message, 'error')
  }
}
