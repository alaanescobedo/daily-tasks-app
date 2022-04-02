import { Color } from "../themes/config";

export type ThemeType = 'dark' | 'light';

export interface Theme {
  '--primary': Color,
  '--secondary': Color,
  '--tertiary': Color,
  '--background': Color,
  '--highlight': Color
}

export interface GeneralConfiguration {
  Opacity: Record<string, number>
}