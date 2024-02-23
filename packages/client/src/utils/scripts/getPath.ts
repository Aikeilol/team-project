import { API_URL } from './constants'
const getImageSrc = (path: string) => {
  return `${API_URL}/resources${path}`
}

export default getImageSrc
