import { Theme, ThemeType } from '../interfaces'
import { getValuesFromRGB } from '../utils/getValuesFromRGB'
import { FontSizes, FontWeights, Opacity } from './config'
import { themeDark } from './dark'
import { themeLight } from './light'

export const THEMES: Record<ThemeType, Theme> = {
  dark: getValuesFromRGB(themeDark),
  light: getValuesFromRGB(themeLight)
}

export const GENERAL_CONFIGURATION = {
  ...Opacity,
  ...FontSizes,
  ...FontWeights
}
