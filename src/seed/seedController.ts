import type { Request, Response } from 'express'
import { createTask, flushDB } from '@lib/redis/db'
import { seedTasks } from '@seed/seed-tasks'
import type { Task } from '@task/taskInterface'

export const generateSeedDB = async (_req: Request, res: Response): Promise<Response> => {
  for (const task of seedTasks.tasks) {
    await createTask(task as Task)
  }
  return res.status(200).send({ message: 'Seed DB created' })
}

export const flushData = async (_req: Request, res: Response): Promise<Response> => {
  const { status, message } = await flushDB()
  return res.status(status).send({ message })
}
