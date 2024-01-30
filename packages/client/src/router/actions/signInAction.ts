import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { signIn } from '../../utils/scripts/api/yandexApi'
import { SignInRequest } from '../../utils/scripts/api/types'
import { AxiosResponse } from 'axios'
import showAlert from '../../utils/scripts/showAlert'
import { setUser } from '../../store/slices/userSlice'

const signInAction = async (dispatch, { request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } =
    ((await signIn(state as SignInRequest)) as AxiosResponse) || {}

  if (data) {
    showAlert('Вы успешно авторизовались', 'success')
    dispatch(setUser(data))
    return redirect('/')
  }

  return null
}

export default signInAction
