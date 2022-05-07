import { Color } from "themes/config"

export type ThemeType = 'dark' | 'light'

export interface Theme {
  '--primary': Color
  '--secondary': Color
  '--tertiary': Color
  '--background': Color
  '--highlight': Color
  '--text': Color
  '--success-light': Color
  '--success': Color
  '--success-dark': Color
  '--warning-light': Color
  '--warning': Color
  '--warning-dark': Color
  '--error-light': Color
  '--error': Color
  '--error-dark': Color
  '--info-light': Color
  '--info': Color
  '--info-dark': Color
}

export interface GeneralConfiguration {
  Opacity: Record<string, number>
}
