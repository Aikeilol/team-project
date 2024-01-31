import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { getUser, signUp } from '../../utils/scripts/api/yandexApi'
import { SignUpRequest } from '../../utils/scripts/api/types'
import showAlert from '../../utils/scripts/showAlert'
import { setUser } from '../../store/slices/userSlice'
import { AppDispatch } from '../../store/store'

const signUpAction = async (
  dispatch: AppDispatch,
  { request }: LoaderFunctionArgs
) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } = (await signUp(state as SignUpRequest)) || {}

  if (data) {
    const user = (await getUser()) || {}
    showAlert('Вы успешно зарегистрировались', 'success')

    if (user) {
      dispatch(setUser(user.data))
      return redirect('/')
    }
  }

  return null
}

export default signUpAction
