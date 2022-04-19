import { seedTasks } from '@seed/seed-tasks'
import { createIndex } from '@utils/tests/task'
import { flushDB, generateSeed } from '@utils/tests/seed'
import { searchTasks } from '@lib/redis/taskDB'
import { signup } from '@utils/tests/auth/signup'
import { seedIndividualUser } from './seed-users'

describe('SEED.TEST.TS -- TASK /api/v1/seeds/task', () => {
  describe('Generate Seeds tasks', () => {
    let token: string

    beforeEach(async () => {
      await flushDB()
      const { body } = await signup(seedIndividualUser)
      token = body.token
    })
    test('should return status 200 and message "Seed DB created"', async () => {
      const { status, body } = await generateSeed()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Seed DB created')
    })
    test('should add the initial data to the database', async () => {
      await generateSeed()
      await createIndex(token)

      const tasks = await searchTasks('ABC123')
      expect(tasks).toHaveLength(seedTasks.length)
    })
  })
  describe('Flush database', () => {
    let token: string

    beforeEach(async () => {
      const { body } = await signup(seedIndividualUser)
      token = body.token
    })

    test('should return status 200 and message "Data flushed"', async () => {
      const { status, body } = await flushDB()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'DB flushed')
    })
    test('should empty the database', async () => {
      await createIndex(token)

      const tasks = await searchTasks('ABC123')
      expect(tasks).toBeInstanceOf(Array)
      expect(tasks).toHaveLength(0)
    })
  })
})
