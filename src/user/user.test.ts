import agent from '@utils/tests/agent'
import { flushDB } from '@utils/tests/seed'
import type { NewUserClientData } from './userInterface'

const TestSignupUser: NewUserClientData = {
  username: 'user',
  password: 'password123',
  email: 'user@user.com'
}

const fields = [...Object.keys(TestSignupUser), 'tasks', 'active', 'createdAt', 'updatedAt', 'entityId']

describe('Users Module', () => {
  beforeAll(async () => {
    await flushDB()
  })

  test('should return status 200 and message Index created', async () => {
    const { status, body } = await agent.get('/api/v1/users/create-index')
    expect(status).toBe(200)
    expect(body).toHaveProperty('message', 'Index created')
  })

  test('shoudl return all Users', async () => {
    const response = await agent.get('/api/v1/users')
    expect(response.status).toBe(200)
    expect(true).toBe(true)
  })

  test('should return User by id', async () => {
    const { body: { data: { user: { entityId } } } } = await agent.post('/api/v1/auth/signup').send(TestSignupUser)
    const { status, body } = await agent.get(`/api/v1/users/${entityId as string}`)
    expect(status).toBe(200)
    for (const field of fields) {
      expect(body).toHaveProperty(field)
    }
  })
})
