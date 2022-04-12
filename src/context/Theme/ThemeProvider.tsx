import { CSSProperties, FC, useState } from 'react'
import { ThemeType } from '@interfaces/theme'
import { GENERAL_CONFIGURATION, THEMES } from '@themes'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider: FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark')
  const cssVariables = { ...GENERAL_CONFIGURATION, ...THEMES[currentTheme] }

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      setCurrentTheme
    }}
    >
      <div style={{ ...cssVariables as CSSProperties }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
