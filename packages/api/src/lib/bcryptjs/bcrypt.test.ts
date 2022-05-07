import { hashPassword, comparePassword } from '@lib/bcryptjs'

const password = 'password'

describe('@lib/bryptjs', () => {
  describe('hash-password.ts', () => {
    test('should not return the same password', () => {
      const hashedPassword = hashPassword(password)
      expect(hashedPassword).not.toBe(password)
    })
  })

  describe('compare-password.ts', () => {
    test('should return true if the comparation is correct', async () => {
      const hashedPassword = hashPassword(password)
      const passwordCorrect = await comparePassword(password, hashedPassword)
      expect(passwordCorrect).toBe(true)
    })
    test('should return false if the comparation is incorrect', async () => {
      const hashedPassword = hashPassword(password)
      const passwordCorrect = await comparePassword('wrongPassword', hashedPassword)
      expect(passwordCorrect).toBe(false)
    })
  })
})
