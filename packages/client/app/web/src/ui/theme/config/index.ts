
import { Theme, ThemeType } from '@ui/theme/theme.interface'
import { getValuesFromRGB } from '@utils/getValuesFromRGB'
import { FontSizes, FontWeights, Opacity } from './config'
import { themeDark } from './dark'
import { themeLight } from './light'

export const THEMES: Record<ThemeType, Theme> = {
  dark: getValuesFromRGB(themeDark),
  light: getValuesFromRGB(themeLight as Theme), //TODO: Add variables to Themelight
}

export const GENERAL_CONFIGURATION = {
  ...Opacity,
  ...FontSizes,
  ...FontWeights
}
