import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { signUp } from '../../utils/scripts/api/yandexApi'
import { SignUpRequest, UserId } from '../../utils/scripts/api/types'
import { AxiosResponse } from 'axios'
import showAlert from '../../utils/scripts/showAlert'

const signUpAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } =
    ((await signUp(state as SignUpRequest)) as AxiosResponse<UserId>) || {}

  if (data) {
    showAlert('Вы успешно зарегистрировались', 'success')

    return redirect('/')
  }

  return null
}

export default signUpAction
