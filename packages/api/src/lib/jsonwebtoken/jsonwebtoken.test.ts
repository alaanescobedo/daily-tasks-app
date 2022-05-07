import { createToken } from './create-token'

describe('@lib/jsonwebtoken', () => {
  test('should return a string', () => {
    const token = createToken({ id: 'testId' })
    expect(typeof token).toBe('string')
  })
})
