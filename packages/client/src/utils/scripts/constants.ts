export const API_URL = 'https://ya-praktikum.tech/api/v2'
export const getOauthUrl = (clientId: string, redirectUri: string) =>
  `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
export const RATING_FIELD_NAME = 'ratingSlytherinTeam'
export const TEAM_NAME = 'slytherin'
