import request from 'supertest'
import app from "@config/app"
import { seedTasks } from "@seed/seed-tasks"

describe('Test Seeds /api/v1/seeds/task', () => {

  beforeAll(async () => {
    await request(app).get('/api/v1/seeds/flush')
  })

  test('should return status 200 and message "Seed DB created"', async () => {

    const response = await request(app).get('/api/v1/seeds/generate')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Seed DB created')

    await request(app).get('/api/v1/tasks/create-index')

    const { body: tasks } = await request(app).get('/api/v1/tasks/search')
    expect(tasks).toHaveLength(seedTasks.tasks.length)
  })

  test('should return status 200 and message "Data flushed"', async () => {
    const response = await request(app).get('/api/v1/seeds/flush')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'DB flushed')

    await request(app).get('/api/v1/tasks/create-index')

    const { body: tasks } = await request(app).get('/api/v1/tasks/search')
    expect(tasks).toBeInstanceOf(Array)
    expect(tasks).toHaveLength(0)
  })
})
