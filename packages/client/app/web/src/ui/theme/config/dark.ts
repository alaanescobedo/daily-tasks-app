import { Theme } from '../theme.interface'
import { Color } from './config'

export const themeDark: Theme = {
  '--primary': Color.PERFUME,
  '--secondary': Color.FRENCH_PASS,
  '--tertiary': Color.MADANG,
  '--background': Color.DAINTREE,
  '--highlight': Color.SUPERNOVA,
  '--text': Color.WHITE,
  '--error-light': Color.RED_1,
  '--error': Color.RED_2,
  '--error-dark': Color.RED_3,
  '--success-light': Color.GREEN_1,
  '--success': Color.GREEN_2,
  '--success-dark': Color.GREEN_3,
  '--warning-light': Color.YELLOW_1,
  '--warning': Color.YELLOW_2,
  '--warning-dark': Color.YELLOW_3,
  '--info-light': Color.BLUE_1,
  '--info': Color.BLUE_2,
  '--info-dark': Color.BLUE_3
}
