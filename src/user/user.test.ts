import agent from '@utils/tests/agent'
import { signup } from '@utils/tests/auth/signup'
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
    const { body: { data: { user: { entityId } } } } = await signup(TestSignupUser)
    const { status, body } = await agent.get(`/api/v1/users/${entityId as string}`)
    expect(status).toBe(200)
    for (const field of fields) {
      expect(body).toHaveProperty(field)
    }
  })

  test('should change the email and the username but not the entityId', async () => {
    const { body: { data: { user: userSignUp } } } = await signup(TestSignupUser)

    const { status, body } = await agent.patch(`/api/v1/users/${userSignUp.entityId as string}`).send({ username: 'userChanged', email: 'changed@email.com' })
    expect(status).toBe(200)
    expect(body.entityId).toBe(userSignUp.entityId)
    expect(body.username).toBe('userChanged')
    expect(body.email).toBe('changed@email.com')
    for (const field of fields) {
      expect(body).toHaveProperty(field)
    }
  })
  test('should change the property active to false and return status 200 with the message "User status updated"', async () => {
    const { body: { data: { user: userSignUp } } } = await signup(TestSignupUser)

    const { status, body } = await agent.delete(`/api/v1/users/${userSignUp.entityId as string}`)
    expect(status).toBe(200)
    expect(body).toHaveProperty('message', 'User status updated')

    const { body: body2 } = await agent.get(`/api/v1/users/${userSignUp.entityId as string}`)
    expect(body2.active).toBe(false)
  })
})
