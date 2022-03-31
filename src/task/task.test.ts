import { postTask, getAllTasks, createIndex, deleteTask, getTaskById } from '@utils/tests/task'
import { flushDB } from '@utils/tests/seed'
import type { TaskClientData } from './taskInterface'
import { signup } from '@utils/tests/auth/signup'
import type { NewUserClientData } from '@user/userInterface'

const TestTask: TaskClientData = {
  title: 'Add test to the daily-task app',
  scheduledFor: '2022-03-08T00:00:00.000Z',
  description: 'Add test to the daily-task app'
}
const TestUser: NewUserClientData = {
  username: 'user',
  password: 'password123',
  email: 'user@user.com'
}
// TODO implement type checking for the next code
const fields = [...Object.keys(TestTask), 'status', 'userID', 'createdAt', 'completedAt', 'updatedAt', 'entityId']

describe('TASK TESTS /api/v1/tasks', () => {
  describe('GET /createindex', () => {
    let token: string
    beforeAll(async () => {
      const { body } = await signup(TestUser)
      token = body.token
    })
    test('should return status 200 and message Index created', async () => {
      const { status, body } = await createIndex(token)

      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Index created')
    })
  })

  describe('CRUD Operations', () => {
    let token: string
    beforeEach(async () => {
      await flushDB()
      const response = await signup(TestUser)
      token = response.body.token
      await createIndex(token)
    })

    describe('POST /api/v1/tasks', () => {
      test('should return a new task created', async () => {
        const { status, body } = await postTask(TestTask, token)

        expect(status).toBe(201)
        for (const field of fields) {
          expect(body).toHaveProperty(field)
        }
      })
    })

    describe('GET /api/v1/tasks', () => {
      test('should return all tasks', async () => {
        const { status, body } = await getAllTasks('ABC123', token)
        expect(status).toBe(200)
        expect(body).toBeInstanceOf(Array)
      })
    })

    describe('GET /api/v1/tasks/search/:id', () => {
      test('should return status 200 and a task', async () => {
        const { body: task } = await postTask(TestTask, token)
        const { entityId } = task

        const { status, body } = await getTaskById(entityId, token)
        expect(status).toBe(200)
        expect(body).toHaveProperty('entityId', entityId)
        for (const field of fields) {
          expect(body).toHaveProperty(field)
        }
      })
    })

    describe('DELETE /api/v1/tasks/:id', () => {
      test('should return status 200 and message Task deleted', async () => {
        const { body: task } = await postTask(TestTask, token)
        const { entityId } = task

        const { status, body } = await deleteTask(entityId, token)
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Task deleted')
      })

      test('should return error 400 if id is wrong', async () => {
        const { status, body } = await deleteTask('wrong-id', token)
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Wrong id')
      })
    })
  })

  describe('ERROR Handlers', () => {
    describe('Couldnt connect to Database', () => {
      const TempStorage = process.env['REDIS_URL']
      let token: string
      beforeAll(async () => {
        const response = await signup(TestUser)
        token = response.body.token

        process.env['REDIS_URL'] = undefined
      })
      test('POST /api/v1/tasks should return status 500 with detailed errors', async () => {
        const { status, body } = await postTask(TestTask, token)

        expect(status).toBe(500)
        expect(body).toHaveProperty('message', 'Invalid URL')
        expect(body).toHaveProperty('status', 'error')
        expect(body).toHaveProperty('stack')
        expect(body.error).toBeInstanceOf(Object)
      })
      afterAll(() => {
        process.env['REDIS_URL'] = TempStorage
      })
    })
  })
})
