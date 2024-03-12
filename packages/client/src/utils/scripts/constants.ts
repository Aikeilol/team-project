import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios'

export const API_URL = 'https://ya-praktikum.tech/api/v2'
export const FORUM_API_URL = `http://localhost:3001/api/forum`
export const getOauthUrl = (clientId: string, redirectUri: string) =>
  `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
export const RATING_FIELD_NAME = 'ratingSlytherinTeam'
export const TEAM_NAME = 'slytherin'

export const SlytherinApiUrl =
  process.env.SERVER_URL || 'http://localhost:3001/api'

export const slytherinApi: AxiosInstance = axios.create({
  baseURL: SlytherinApiUrl,
})

export const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
  withCredentials: true,
}
