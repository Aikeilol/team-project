import { redirect as reroute } from 'react-router-dom'
import { getUser } from '../../utils/scripts/api/yandexApi'
import { AxiosResponse } from 'axios'
import { IUser } from '../../utils/scripts/api/types'

const getUserLoader = async (redirect = false) => {
  const { data } = ((await getUser()) as AxiosResponse<IUser>) || {}

  if (data) {
    return redirect ? reroute('/') : data
  }

  return null
}

export default getUserLoader
