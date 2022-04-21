import { seedIndividualUser } from '@seed/seed-users'
import agent from '@utils/tests/agent'
import { signup } from '@utils/tests/auth/signup'
import { flushDB } from '@utils/tests/seed'

const fields = [...Object.keys(seedIndividualUser), 'entityId']

describe('Users Module', () => {
  let token: string
  let userId: string
  beforeAll(async () => {
    await flushDB()
    const { body } = await signup(seedIndividualUser)
    token = body.token
    userId = body.data.user.entityId
  })

  test('shoudl return all Users', async () => {
    const response = await agent.get('/api/v1/users').set('Authorization', `Bearer ${token}`)
    expect(response.status).toBe(200)
    expect(true).toBe(true)
  })

  test('should return User by id', async () => {
    const { status, body } = await agent.get(`/api/v1/users/${userId}`).set('Authorization', `Bearer ${token}`)
    expect(status).toBe(200)
    for (const field of fields) {
      expect(body).toHaveProperty(field)
    }
  })

  test('should change the email and the username but not the entityId', async () => {
    const { status, body } = await agent.patch(`/api/v1/users/${userId}`).set('Authorization', `Bearer ${token}`).send({ username: 'userChanged', email: 'changed@email.com' })
    expect(status).toBe(200)
    expect(body.entityId).toBe(userId)
    expect(body.username).toBe('userChanged')
    expect(body.email).toBe('changed@email.com')
    for (const field of fields) {
      expect(body).toHaveProperty(field)
    }
  })
  test.skip('should change the property active to false and return status 200 with the message "User status updated"', async () => {
    const { status, body } = await agent.delete(`/api/v1/users/${userId}`).set('Authorization', `Bearer ${token}`)
    expect(status).toBe(200)
    expect(body).toHaveProperty('message', 'User status updated')

    const { body: body2 } = await agent.get(`/api/v1/users/${userId}`).set('Authorization', `Bearer ${token}`)
    expect(body2.active).toBe(false)
  })
})
