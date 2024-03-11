import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme error')
  }
  return context
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState<boolean>(true)

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
