import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from './ThemeContext'

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
