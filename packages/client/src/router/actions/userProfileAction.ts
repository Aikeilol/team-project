import { LoaderFunctionArgs } from 'react-router-dom'
import { profileRequest, UserId } from '../../utils/scripts/api/types'
import { AxiosResponse } from 'axios'
import showAlert from '../../utils/scripts/showAlert'
import { changeUserProfile } from '../../utils/scripts/api/profileApi'

const userProfileAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } =
    ((await changeUserProfile(state as profileRequest)) as AxiosResponse<UserId>) || {}

  if (data) {
    showAlert('Профиль сохранен', 'success')
  }

  return null
}
export default userProfileAction
