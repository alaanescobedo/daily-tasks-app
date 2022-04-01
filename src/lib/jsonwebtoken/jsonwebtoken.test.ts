import { createToken } from './create-token'

describe('@lib/jsonwebtoken', () => {
  test('should return a string', () => {
    const token = createToken('testId')
    expect(typeof token).toBe('string')
  })
})
