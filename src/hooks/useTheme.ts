import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from '../context'

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
