import { IUser } from '../../utils/scripts/api/types'
import { getUser } from '../../utils/scripts/api/yandexApi'
import { AxiosResponse } from 'axios'

const getUserLoader = async () => {
  const user = ((await getUser()) as AxiosResponse<IUser>) || null
  console.log(user.data)
  return user?.data ? user.data : null
}

export default getUserLoader
