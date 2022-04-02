import { FC, useState } from 'react';
import { ThemeType } from '../../interfaces';
import { THEMES } from '../../themes';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark');
  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: THEMES[currentTheme],
      setCurrentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

