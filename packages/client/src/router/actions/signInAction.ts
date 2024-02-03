import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { getUser, signIn } from '../../utils/scripts/api/yandexApi'
import { SignInRequest } from '../../utils/scripts/api/types'
import showAlert from '../../utils/scripts/showAlert'
import { setUser } from '../../store/slices/userSlice'
import { AppDispatch } from '../../store/store'

const signInAction = async (
  dispatch: AppDispatch,
  { request }: LoaderFunctionArgs
) => {
  const formData = await request.formData()
  const state: { [key: string]: unknown } = {}

  for (const [key, value] of formData) {
    state[key] = value
  }

  const { data } = (await signIn(state as SignInRequest)) || {}

  if (data) {
    const user = await getUser()

    if (user) {
      dispatch(setUser(user.data))
      showAlert('Вы успешно авторизовались', 'success')
      return redirect('/')
    }
  }

  return null
}

export default signInAction
