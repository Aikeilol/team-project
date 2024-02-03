import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type User = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
} | null
interface IUserState {
  user: User | null | undefined
}

const initialState: IUserState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
        ? { ...state.user, ...action.payload }
        : action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
