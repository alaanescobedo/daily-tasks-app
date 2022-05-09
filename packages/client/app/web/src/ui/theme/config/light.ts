import { Theme } from '../theme.interface'
import { Color } from './config'

// TODO: Remove Partial and add variables to Theme
export const themeLight: Partial<Theme> = {
  '--primary': Color.PERFUME,
  '--secondary': Color.FRENCH_PASS,
  '--tertiary': Color.MADANG,
  '--background': Color.WHITE,
  '--highlight': Color.DAINTREE,
  '--text': Color.DOVE_GRAY,
}
