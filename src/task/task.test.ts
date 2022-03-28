import { postTask, getAllTasks, createIndex, deleteTask, getTaskById } from '@utils/tests/task'
import { flushDB, generateSeed } from '@utils/tests/seed'
import { seedTasks } from '@seed/seed-tasks'

const TestTask = {
  title: 'Im a title',
  description: 'Im a description',
  scheduledFor: '2022-03-30T00:30:35.369Z'
}
const fields = [...Object.keys(TestTask), 'status', 'createdAt', 'completedAt', 'updatedAt', 'entityId']

describe('TASK TESTS /api/v1/tasks', () => {
  describe('GET /createindex', () => {
    test('should return status 200 and message Index created', async () => {
      const { status, body } = await createIndex()

      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Index created')
    })
  })

  describe('CRUD Operations', () => {
    beforeEach(async () => {
      await flushDB()
      await createIndex()
    })

    describe('POST /api/v1/tasks', () => {
      test('should return a new task created', async () => {
        const { status, body } = await postTask(TestTask)
        expect(status).toBe(201)
        for (const field of fields) {
          expect(body).toHaveProperty(field)
        }
      })
    })

    describe('GET /api/v1/tasks', () => {
      test('should return all tasks', async () => {
        await generateSeed()

        const { status, body } = await getAllTasks()
        expect(status).toBe(200)
        expect(body).toBeInstanceOf(Array)
        expect(body.length).toBe(seedTasks.tasks.length)
      })
    })

    describe('GET /api/v1/tasks/search/:id', () => {
      test('should return status 200 and a task', async () => {
        const task = await postTask(TestTask)
        const { entityId } = task.body

        const { status, body } = await getTaskById(entityId)
        expect(status).toBe(200)
        expect(body).toHaveProperty('entityId', entityId)
        for (const field of fields) {
          expect(body).toHaveProperty(field)
        }
      })
    })

    describe('DELETE /api/v1/tasks/:id', () => {
      test('should return status 200 and message Task deleted', async () => {
        const task = await postTask(TestTask)
        const { entityId } = task.body

        const { status, body } = await deleteTask(entityId)
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', 'Task deleted')
      })

      test('should return error 400 if id is wrong', async () => {
        const { status, body } = await deleteTask('wrong-id')
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Wrong id')
      })
    })
  })

  describe('ERROR Handlers', () => {
    describe('Couldnt connect to Database', () => {
      const TempStorage = process.env['REDIS_URL']

      beforeAll(() => {
        process.env['REDIS_URL'] = undefined
      })
      test('POST /api/v1/tasks should return status 500 with detailed errors', async () => {
        const { status, body } = await postTask(TestTask)
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
