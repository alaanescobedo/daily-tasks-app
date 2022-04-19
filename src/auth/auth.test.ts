import app from '@config/app'
import { EMPTY_STRING } from '@constants'
import { createIndex } from '@lib/redis/userDB'
import { seedIndividualUser } from '@seed/seed-users'
import { signup } from '@utils/tests/auth/signup'
import { agent } from 'supertest'

const fields = [...Object.keys(seedIndividualUser), 'entityId']

describe('AUTH MODULE', () => {
  describe('/signup route', () => {
    test('should create a new user', async () => {
      const { status, body } = await signup(seedIndividualUser)

      expect(status).toBe(201)
      expect(body.status).toBe('success')
      for (const field of fields) {
        expect(body.data.user).toHaveProperty(field)
      }
    })
    test('should fill the user with the correct information', async () => {
      const { body } = await signup(seedIndividualUser)

      expect(body.data.user).toHaveProperty('username', seedIndividualUser.username)
      expect(body.data.user).toHaveProperty('email', seedIndividualUser.email)
      expect(body.data.user).toHaveProperty('active', true)
      expect(body.data.user).toHaveProperty('tasks', [])
    })
    test('should return the user with the empty password', async () => {
      const { body } = await signup(seedIndividualUser)
      expect(body.data.user).toHaveProperty('password', EMPTY_STRING)
    })
  })

  describe('/LOGIN ROUTE', () => {
    test('should return the correct user', async () => {
      await createIndex()
      const { status, body } = await agent(app).post('/api/v1/auth/login').send({ email: seedIndividualUser.email, password: seedIndividualUser.password })
      expect(status).toBe(200)
      expect(body.data.user).toHaveProperty('password', EMPTY_STRING)
      expect(body.data.user).toHaveProperty('username', seedIndividualUser.username)
      expect(body.data.user).toHaveProperty('email', seedIndividualUser.email)
      expect(body.data.user).toHaveProperty('active', true)
    })
  })
})
