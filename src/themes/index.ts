import { Theme, ThemeType } from "../interfaces"
import { getValuesFromRGB } from "../scripts/getValuesFromRGB"
import { Opacity } from "./config"
import { themeDark } from "./dark"
import { themeLight } from "./light"

export const THEMES: Record<ThemeType, Theme> = {
  dark: getValuesFromRGB(themeDark),
  light: getValuesFromRGB(themeLight)
}

export const GENERAL_CONFIGURATION = {
  ...Opacity
}