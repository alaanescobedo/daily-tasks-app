import { Color } from "@ui/theme/config/config"
import { Theme } from "@ui/theme/theme.interface"


export const getValuesFromRGB = (theme: Theme): Theme => {
  const entries = Object.entries(theme)

  const values = entries.reduce<Theme>((acc, curr) => {
    const [key, value] = curr as [keyof Theme, string]
    const sanitizedRGB = value.replace('rgb(', '').replace(')', '').split(',').join(', ')
    acc[key] = sanitizedRGB as Color
    return acc
  }, theme)

  return values
}
