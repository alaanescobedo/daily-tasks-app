import { seedTasks } from '@seed/seed-tasks'
import { createIndex, getAllTasks } from '@utils/tests/task'
import { flushDB, generateSeed } from '@utils/tests/seed'

describe('SEED.TEST.TS -- TASK /api/v1/seeds/task', () => {
  describe('Generate Seeds tasks', () => {
    beforeEach(async () => await flushDB())
    test('should return status 200 and message "Seed DB created"', async () => {
      const { status, body } = await generateSeed()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'Seed DB created')
    })
    test('should add the initial data to the database', async () => {
      await generateSeed()
      await createIndex()

      const { body: tasks } = await getAllTasks()
      expect(tasks).toHaveLength(seedTasks.tasks.length)
    })
  })
  describe('Flush database', () => {
    test('should return status 200 and message "Data flushed"', async () => {
      const { status, body } = await flushDB()
      expect(status).toBe(200)
      expect(body).toHaveProperty('message', 'DB flushed')
    })
    test('should empty the database', async () => {
      await createIndex()

      const { body: tasks } = await getAllTasks()
      expect(tasks).toBeInstanceOf(Array)
      expect(tasks).toHaveLength(0)
    })
  })
})
