import { createContext, Dispatch, SetStateAction } from 'react'
import { ThemeType } from '@interfaces/theme'

export interface ThemeContextProps {
  themeType: ThemeType
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'dark',
  setCurrentTheme: () => { }
})
