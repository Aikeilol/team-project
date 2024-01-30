import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { getUser, signUp } from '../../utils/scripts/api/yandexApi'
import { SignUpRequest, UserId, IUser } from '../../utils/scripts/api/types'
import { AxiosResponse } from 'axios'
import showAlert from '../../utils/scripts/showAlert'
import { setUser } from '../../store/slices/userSlice'

const signUpAction = async (dispatch, { request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } =
    ((await signUp(state as SignUpRequest)) as AxiosResponse<UserId>) || {}

  if (data) {
    const { data } = ((await getUser()) as AxiosResponse<IUser>) || {}
    showAlert('Вы успешно зарегистрировались', 'success')
    dispatch(setUser(data))
    return redirect('/')
  }

  return null
}

export default signUpAction
