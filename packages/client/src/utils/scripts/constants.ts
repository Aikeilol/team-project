export const API_URL = 'https://ya-praktikum.tech/api/v2'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
