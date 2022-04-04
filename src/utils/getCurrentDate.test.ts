import { getCurrentDate } from './getCurrentDate'
describe('getCurrentDate', () => {
  test('should return a string', () => {
    const date = getCurrentDate()
    expect(typeof date).toBe('string')
  })
})
