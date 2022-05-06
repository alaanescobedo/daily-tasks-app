import { seedTasks } from '@seed/seed-tasks'
import { flushDB, generateSeed } from '@utils/tests/seed'
import { searchTasks } from '@lib/redis/taskDB'
import { seedIndividualUser } from './seed-users'
import { signup } from '@utils/tests/auth/signup'
import { getAllTasks } from '@utils/tests/task'

describe('SEED.TEST.TS -- TASK /api/v1/seeds/task', () => {
  describe('GENERATE SEEDS', () => {
    beforeEach(async () => {
      await flushDB()
    })
    test('should return status 200 and message "Seed DB created"', async () => {
      const { status, body } = await generateSeed()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Seed DB created')
    })
    test('should add the initial data to the database', async () => {
      await generateSeed()

      const tasks = await searchTasks('ABC123')
      expect(tasks).toHaveLength(seedTasks.length)
    })
  })

  describe('FLUSH', () => {
    test('should return status 200 and message "Data flushed"', async () => {
      const { status, body } = await flushDB()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'DB flushed')
    })
    test('should empty the database', async () => {
      await generateSeed()
      await flushDB()

      const { body } = await signup(seedIndividualUser)
      const res = await getAllTasks('ABC123', body.token)

      expect(res.body).toHaveLength(0)
    })
  })
})
