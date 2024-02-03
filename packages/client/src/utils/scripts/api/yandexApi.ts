import showAlert from '../showAlert'
import { SignInRequest, SignUpRequest, YandexApiError } from './types'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios'

export const yandexApi: AxiosInstance = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
})

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
  withCredentials: true,
}

const showError = (err: unknown) => {
  const error = err as AxiosError<YandexApiError>
  const message = error.response?.data.reason as string
  showAlert(message, 'error')
}

export const signUp = async (data: SignUpRequest): Promise<AxiosResponse> => {
  try {
    return await yandexApi.post('/auth/signup', data, config)
  } catch (err) {
    showError(err)

    return Promise.reject(err)
  }
}

export const signIn = async (data: SignInRequest): Promise<AxiosResponse> => {
  try {
    return await yandexApi.post('/auth/signin', data, config)
  } catch (err) {
    showError(err)

    return Promise.reject(err)
  }
}

export const getUser = async (): Promise<AxiosResponse> => {
  try {
    return await yandexApi.get('/auth/user', config).then(res => res)
  } catch (error) {
    return Promise.reject(error)
  }
}
