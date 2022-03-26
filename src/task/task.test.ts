import request from 'supertest'
import app from '@config/app'

const newTask = {
  title: 'Test title',
  status: 'pending',
  scheduledFor: '2022-06-06T00:00:00.000Z'
}
const fields = Object.entries(newTask)

describe('GET /api/v1/tasks/createindex', () => {
  test('should return status 200 and message Index created', async () => {
    const response = await request(app).get('/api/v1/tasks/create-index')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Index created')
  })
})

describe('CRUD operations', () => {
  beforeEach(async () => {
    await request(app).get('/api/v1/seeds/flush')
    await request(app).get('/api/v1/tasks/create-index')
  })
  afterAll(async () => {
    await request(app).get('/api/v1/seeds/flush')
  })

  describe('POST /api/v1/tasks', () => {
    test('should return a new task created', async () => {
      const response = await request(app).post('/api/v1/tasks').send(newTask)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('entityId')
      for (const [key, value] of fields) {
        expect(response.body).toHaveProperty(key, value)
      }
    })
  })
  describe('GET /api/v1/tasks', () => {
    test('should return all tasks', async () => {
      await request(app).post('/api/v1/tasks').send(newTask)

      const response = await request(app).get('/api/v1/tasks/search')
      const task = response.body[0]

      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      expect(task).toHaveProperty('entityId')
      for (const [key, value] of fields) {
        expect(task).toHaveProperty(key, value)
      }
    })
  })

  describe('DELETE /api/v1/tasks/:id', () => {
    test('should return status 200 and message Task deleted', async () => {
      const task = await request(app).post('/api/v1/tasks').send(newTask)
      const { entityId } = task.body

      const response = await request(app).delete(`/api/v1/tasks/${entityId as string}`)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('message', 'Task deleted')
    })
    test('should return error 400 if id is wrong', async () => {
      const response = await request(app).delete('/api/v1/tasks/wrong-id')
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message', 'Wrong id')
    })
  })
})
