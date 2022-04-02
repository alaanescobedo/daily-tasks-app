import { Theme } from "../interfaces";
import { getValuesFromRGB } from "../utils/getValuesFromRGB";
import { Color } from "./config";

export const themeDark: Theme = {
  '--primary': Color.PERFUME,
  '--secondary': Color.FRENCH_PASS,
  '--tertiary': Color.MADANG,
  '--background': Color.DAINTREE,
  '--highlight': Color.SUPERNOVA,
  '--text': Color.WHITE
}

getValuesFromRGB(themeDark)