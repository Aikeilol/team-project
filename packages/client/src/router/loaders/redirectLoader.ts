import { redirect } from 'react-router-dom'
import { IUser } from '../../utils/scripts/api/types'
import { IUserState } from '../../store/slices/userSlice'

const redirectLoader = (user: IUser | null | undefined | IUserState) =>
  user ? redirect('/') : null

export default redirectLoader
