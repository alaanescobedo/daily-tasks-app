import request from 'supertest'
import app from '@config/app'

const TestTask = {
  title: 'Im a title',
  description: 'Im a description',
  scheduledFor: '2022-03-30T00:30:35.369Z'
}
const fields = [...Object.keys(TestTask), 'status', 'createdAt', 'completedAt', 'updatedAt', 'entityId']

describe('TASK TESTS /api/v1/tasks', () => {
  describe('GET /createindex', () => {
    test('should return status 200 and message Index created', async () => {
      const response = await request(app).get('/api/v1/tasks/create-index')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('message', 'Index created')
    })
  })
  describe('CRUD Operations', () => {
    beforeEach(async () => {
      await request(app).get('/api/v1/seeds/flush')
      await request(app).get('/api/v1/tasks/create-index')
    })
    describe('POST /api/v1/tasks', () => {
      test('should return a new task created', async () => {
        const response = await request(app).post('/api/v1/tasks').send(TestTask)
        expect(response.status).toBe(201)
        for (const field of fields) {
          expect(response.body).toHaveProperty(field)
        }
      })
    })
    describe('GET /api/v1/tasks', () => {
      test('should return all tasks', async () => {
        await request(app).post('/api/v1/tasks').send(TestTask)

        const response = await request(app).get('/api/v1/tasks/search')
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        for (const field of fields) {
          expect(response.body[0]).toHaveProperty(field)
        }
      })
    })

    describe('GET /api/v1/tasks/search/:id', () => {
      test('should return status 200 and a task', async () => {
        const { body: task } = await request(app).post('/api/v1/tasks').send(TestTask)

        const response = await request(app).get(`/api/v1/tasks/search/${task.entityId as string}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('entityId', task.entityId)
        for (const field of fields) {
          expect(response.body).toHaveProperty(field)
        }
      })
    })

    describe('DELETE /api/v1/tasks/:id', () => {
      test('should return status 200 and message Task deleted', async () => {
        const task = await request(app).post('/api/v1/tasks').send(TestTask)
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
  afterAll(async () => {
    await request(app).get('/api/v1/seeds/flush')
  })
})
