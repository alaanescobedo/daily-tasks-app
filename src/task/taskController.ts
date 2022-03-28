import type { Request, Response } from 'express'
import { createIndex, createTask, deleteTaskDB, searchTasks, searchTasksById } from '@lib/redis/db'
import type { TaskClientData, Task } from './taskInterface'

export const postTask = async (req: Request, res: Response): Promise<Response> => {
  const { title, scheduledFor, description = null }: TaskClientData = req.body

  const data: Task = {
    title,
    description,
    scheduledFor,
    status: 'Pending',
    createdAt: new Date().toISOString()
  }

  const taskCreated = await createTask(data)

  return res.status(201).send(taskCreated)
}
export const getAllTask = async (_req: Request, res: Response): Promise<Response> => {
  const tasks = await searchTasks()
  return res.status(200).send(tasks)
}
export const getIndex = async (_req: Request, res: Response): Promise<Response> => {
  await createIndex()
  return res.status(200).send({ message: 'Index created' })
}
export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  const { id = '' } = req.params
  const { status, message } = await deleteTaskDB(id)
  return res.status(status).send({ message })
}

export const getTaskById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const task = await searchTasksById(id as string)
  return res.status(200).send(task)
}
