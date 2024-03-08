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

export interface IUserState {
  user: User | null | undefined
  service_id: string
}

const initialState: IUserState = {
  user: undefined,
  service_id: '',
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
    setServiceId: (state, action: PayloadAction<string>) => {
      state.service_id = action.payload
    },
  },
})

export const { setUser, setServiceId } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectServiceId = (state: RootState) => state.user.service_id

export default userSlice.reducer
