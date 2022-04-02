import { getValuesFromRGB } from '../../src/scripts/getValuesFromRGB';
import { THEMES } from '../../src/themes';

const fields = Object.keys(THEMES.dark)

describe('Script -- getValuesFromRGB', () => {
  test('should return the values of the rgb string', () => {
    const values = getValuesFromRGB(THEMES.dark)
    const value = Object.values(values)[0]
    expect(value.split(',')).toHaveLength(3)
    for (const field of fields) {
      expect(values).toHaveProperty(field)
    }
  })
})