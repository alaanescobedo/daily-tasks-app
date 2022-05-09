import { THEMES } from '@ui/theme/config'
import { getValuesFromRGB } from './getValuesFromRGB'


const fields = Object.keys(THEMES.dark)

describe('Script -- getValuesFromRGB', () => {
  test('should return the values of the rgb string', () => {
    const values = getValuesFromRGB(THEMES.dark)
    const value = Object.values(values)[0] as string
    expect(value.split(',')).toHaveLength(3)
    for (const field of fields) {
      expect(values).toHaveProperty(field)
    }
  })
})
