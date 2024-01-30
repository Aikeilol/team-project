import { LoaderFunctionArgs } from 'react-router-dom'
import { changeUserPassword } from '../../utils/scripts/api/profileApi'
import { passwordRequest, UserId } from '../../utils/scripts/api/types'
import { AxiosResponse } from 'axios'
import showAlert from '../../utils/scripts/showAlert'

const userPasswordAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } =
    ((await changeUserPassword(state as passwordRequest)) as AxiosResponse<UserId> || {})

  if (data) {
    showAlert('Пароль сохранен', 'success')
  }

  return null
}
export default userPasswordAction
