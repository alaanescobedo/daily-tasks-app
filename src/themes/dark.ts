import { getValuesFromRGB } from "../scripts/getValuesFromRGB";
import { Color } from "./config";

export const themeDark = {
  '--primary': Color.PERFUME,
  '--secondary': Color.FRENCH_PASS,
  '--tertiary': Color.MADANG,
  '--background': Color.DAINTREE,
  '--highlight': Color.SUPERNOVA,
  '--text': Color.WHITE,
}

getValuesFromRGB(themeDark)