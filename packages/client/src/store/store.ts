import { configureStore } from '@reduxjs/toolkit'
import userSlice, { IUserState } from './slices/userSlice'
import { isServer } from '../utils/scripts/constants'

declare global {
  interface Window {
    __PRELOADED_STATE__: {
      store: {
        user: IUserState
      }
    }
  }
}

const preloadedState = isServer ? {} : window?.__PRELOADED_STATE__?.store

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState: preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
