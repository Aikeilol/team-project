import { createContext, useContext } from 'react'
import { Notifications} from '../../utils/notifications'

export type AppContextType = {
  notifications: Notifications
}

export const DefaultAppContext: AppContextType = {  
  notifications: new Notifications()
}

export const AppContext = createContext<AppContextType>(DefaultAppContext)


export const useAppContext = () => useContext(AppContext)
