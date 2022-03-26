import request from 'supertest'
import app from '@config/app'

describe('GET /api/v1/tasks/createindex', () => {
  test('should return status 200 and message Index created', async () => {
    const response = await request(app).get('/api/v1/tasks/create-index')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Index created')
  })
})

describe("POST /api/v1/tasks", () => {
  const newTask = {
    title: "Test title",
    status: "pending",
    scheduledFor: "2022-06-06T00:00:00.000Z"
  }
  test("should return a new task created", async () => {
    const fields = Object.entries(newTask)
    const response = await request(app).post("/api/v1/tasks").send(newTask)
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
    for (const [key, value] of fields) {
      expect(response.body).toHaveProperty(key, value)
    }
  })
})