import { createContext, useContext } from 'react'
import { Notifications } from '../../utils/notifications'

export type AppContextType = {
  notifications?: Notifications
}

export const createAppContext = () => ({ notifications: new Notifications() })

export const AppContext = createContext<AppContextType | null>(null)

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within a AppContext.Provider')
  }

  return context
}
