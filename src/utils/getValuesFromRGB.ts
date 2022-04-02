import { Theme } from "../interfaces"
import { Color } from "../themes/config"

export const getValuesFromRGB = (theme: Theme) => {
  const entries = Object.entries(theme)
  
  const values = entries.reduce((acc, curr) => {
    const [key, value] = curr as [keyof Theme, string]
    const sanitizedRGB = value.replace('rgb(', '').replace(')', '').split(',').join(', ')
    acc[key] = sanitizedRGB as Color
    return acc
  }, {} as Theme)

  return values
}