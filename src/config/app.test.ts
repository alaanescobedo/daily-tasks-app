import request from 'supertest'
import app from './app'

describe('Get /ping', () => {
  it('should return pong', async () => {
    const response = await request(app).get('/ping').send()
    expect(response.text).toBe('pong')
  })
})

describe("POST /api/v1/task", () => {
  const newTask = {
    title: "Test title",
    status: "pending",
    scheduledFor: "2022-06-06T00:00:00.000Z"
  }
  test("should return a new task created", async () => {
    const response = await request(app).post("/api/v1/task").send(newTask)
    expect(response.status).toBe(201)
    expect(response.body).toEqual(newTask)
  })
})