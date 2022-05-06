import { postTask, getAllTasks, deleteTask, getTaskById } from '@utils/tests/task'
import { flushDB } from '@utils/tests/seed'
import { signup } from '@utils/tests/auth/signup'
import { seedIndividualUser } from '@seed/seed-users'
import { seedIndividualTask } from '@seed/seed-tasks'

// TODO implement type checking for the next code
const fields = [...Object.keys(seedIndividualTask), 'entityId']

describe('TASK TESTS /api/v1/tasks', () => {
  describe('CRUD Operations', () => {
    let token: string
    beforeEach(async () => {
      await flushDB()
      const response = await signup(seedIndividualUser)
      token = response.body.token
    })

    describe('POST /api/v1/tasks', () => {
      test('should return a new task created', async () => {
        const { status, body } = await postTask(seedIndividualTask, token)

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
        const { body: task } = await postTask(seedIndividualTask, token)
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
        const { body: task } = await postTask(seedIndividualTask, token)
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
})
