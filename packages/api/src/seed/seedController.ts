import type { Request, Response } from 'express'
import { seedTasks } from '@seed/seed-tasks'
import { seedUsers } from '@seed/seed-users'
import { flushDB, generateSeedDB } from '@lib/redis/seedDB'
import taskSchema from '@task/taskModel'
import userSchema from '@user/userModel'

export const generateSeed = async (_req: Request, res: Response): Promise<Response> => {
  await generateSeedDB(userSchema, seedUsers)
  await generateSeedDB(taskSchema, seedTasks)

  return res.status(200).send({ message: 'Seed DB created' })
}

export const flushData = async (_req: Request, res: Response): Promise<Response> => {
  const { status, message } = await flushDB()
  return res.status(status).send({ message })
}
