import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from '@context/Theme'

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
