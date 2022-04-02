import { createContext, Dispatch, SetStateAction } from "react"
import { Theme, ThemeType } from "../../interfaces"
import { GENERAL_CONFIGURATION, THEMES } from "../../themes"

interface ThemeContextProps {
  themeType: ThemeType
  theme: Theme,
  generalConfiguration: any
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'dark',
  theme: THEMES['dark'],
  generalConfiguration: { ...GENERAL_CONFIGURATION }
} as ThemeContextProps)