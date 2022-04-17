import app from '@config/app'
import { EMPTY_STRING } from '@constants'
import { createIndex } from '@lib/redis/userDB'
import { signup } from '@utils/tests/auth/signup'
import { agent } from 'supertest'
import type { SignupUserClientData } from './auth.interfaces'

const TestSignupUser: SignupUserClientData = {
  username: 'userFixed',
  password: 'PasswordFixed1!',
  email: 'user@user.com'
}

const fields = [...Object.keys(TestSignupUser), 'tasks', 'active', 'createdAt', 'updatedAt', 'entityId']

describe('AUTH MODULE', () => {
  describe('/signup route', () => {
    test('should create a new user', async () => {
      const { status, body } = await signup(TestSignupUser)

      expect(status).toBe(201)
      expect(body.status).toBe('success')
      for (const field of fields) {
        expect(body.data.user).toHaveProperty(field)
      }
    })
    test('should fill the user with the correct information', async () => {
      const { body } = await signup(TestSignupUser)

      expect(body.data.user).toHaveProperty('username', TestSignupUser.username)
      expect(body.data.user).toHaveProperty('email', TestSignupUser.email)
      expect(body.data.user).toHaveProperty('active', true)
      expect(body.data.user).toHaveProperty('tasks', [])
    })
    test('should return the user with the empty password', async () => {
      const { body } = await signup(TestSignupUser)
      expect(body.data.user).toHaveProperty('password', EMPTY_STRING)
    })
  })

  describe('/LOGIN ROUTE', () => {
    test('should return the correct user', async () => {
      await createIndex()
      const { status, body } = await agent(app).post('/api/v1/auth/login').send({ email: TestSignupUser.email, password: TestSignupUser.password })
      expect(status).toBe(200)
      expect(body.data.user).toHaveProperty('password', EMPTY_STRING)
      expect(body.data.user).toHaveProperty('username', TestSignupUser.username)
      expect(body.data.user).toHaveProperty('email', TestSignupUser.email)
      expect(body.data.user).toHaveProperty('active', true)
    })
  })
})
