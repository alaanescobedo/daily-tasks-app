import type { Request, Response } from 'express'

import { createTask, deleteTaskDB, searchTasks, searchTasksById } from '@lib/redis/taskDB'
import type { TaskClientData, Task } from '@task/taskInterface'
import { catchAsync } from '@utils/errors/catchAsync'
// import { updateUserTasks } from '@lib/redis/userDB'

import { EMPTY_STRING } from '@constants'
import { updateUserTasks } from '@lib/redis/userDB'

// CRUD Operations
export const postTask = catchAsync(async (req: Request, res: Response): Promise<Response> => {
  const { title, scheduledFor, description = EMPTY_STRING }: TaskClientData = req.body
  const user = req.locals.user

  const data: Task = {
    title,
    description,
    scheduledFor,
    userID: user.entityId,
    status: 'Pending',
    createdAt: new Date().toISOString()
  }

  const taskCreated = await createTask(data)
  await updateUserTasks(user.entityId, taskCreated.entityId)

  return res.status(201).send(taskCreated)
})
export const getAllTask = async (req: Request, res: Response): Promise<Response> => {
  const { entityId } = req.locals.user
  const tasks = await searchTasks(entityId)
  return res.status(200).send(tasks)
}
export const getTaskById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const task = await searchTasksById(id as string)
  return res.status(200).send(task)
}
export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  const { id = EMPTY_STRING } = req.params
  const { status, message } = await deleteTaskDB(id)
  return res.status(status).send({ message })
}
