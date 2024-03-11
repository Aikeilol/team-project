import { API_URL } from '../constants'
import showAlert from '../showAlert'
import { SignInRequest, SignUpRequest, YandexApiError } from './types'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios'

export const yandexApi: AxiosInstance = axios.create({
  baseURL: API_URL,
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

export const signUp = async (data: SignUpRequest) => {
  try {
    return await yandexApi.post('/auth/signup', data, config)
  } catch (err) {
    return showError(err)
  }
}

export const signIn = async (data: SignInRequest) => {
  try {
    return await yandexApi.post('/auth/signin', data, config)
  } catch (err) {
    return showError(err)
  }
}

export const getUser = async () => {
  try {
    return await yandexApi.get('/auth/user', config).then(res => res)
  } catch (error) {
    return console.error(error)
  }
}

export const getServiceId = async (redirectUri: string) => {
  try {
    return await yandexApi
      .get('/oauth/yandex/service-id', {
        headers: {
          Accept: 'application/json',
        } as RawAxiosRequestHeaders,
        withCredentials: true,
        params: { redirectUri },
      })
      .then(res => res)
  } catch (err) {
    return console.error(err)
  }
}

export const signInYandexPassport = async (code: string) => {
  try {
    return await yandexApi.post('/oauth/yandex', { code: code }, config)
  } catch (err) {
    return showError(err)
  }
}
