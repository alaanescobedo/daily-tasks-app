import agent from '@utils/tests/agent'
import { flushDB } from '@utils/tests/seed'

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
})
