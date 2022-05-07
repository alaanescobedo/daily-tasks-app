import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from 'modules/theme/api'

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
