import type { Request, Response } from 'express'

import { createIndex, createTask, deleteTaskDB, searchTasks, searchTasksById } from '@lib/redis/taskDB'
import type { TaskClientData, Task } from '@task/taskInterface'
import { catchAsync } from '@utils/errors/catchAsync'
// import { updateUserTasks } from '@lib/redis/userDB'

import jwt from 'jsonwebtoken'
import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'

// JWT
const getTokenFrom = (request: Request): string | null => {
  const authorization = request.get('authorization') // Grab the authorization header content
  if (authorization === undefined) return null
  return authorization.toLowerCase().startsWith('bearer ')
    ? authorization.substring(7) // Without 'bearer '
    : null
}

export const getIndex = async (_req: Request, res: Response): Promise<Response> => {
  await createIndex()
  return res.status(200).send({ message: 'Index created' })
}
// CRUD Operations
export const postTask = catchAsync(async (req: Request, res: Response): Promise<Response> => {
  const { title, scheduledFor, description = EMPTY_STRING }: TaskClientData = req.body
  // const { entityId: userID } = req.cookies.currentUser
  const token = getTokenFrom(req)

  // TODO - Refactor in middleware
  if (token === null) throw new AppError('Token is missing', 401)
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is missing', 400)

  const { id } = jwt.verify(token, JWT_SECRET) as any
  const data: Task = {
    title,
    description,
    scheduledFor,
    userID: id,
    status: 'Pending',
    createdAt: new Date().toISOString()
  }

  const taskCreated = await createTask(data)
  // await updateUserTasks(id, taskCreated.entityId)

  return res.status(201).send(taskCreated)
})
export const getAllTask = async (req: Request, res: Response): Promise<Response> => {
  const token = getTokenFrom(req)

  if (token === null) throw new AppError('Token not found', 401)
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET not found', 401)

  const { id } = jwt.verify(token, JWT_SECRET) as { id: string }

  const tasks = await searchTasks(id)
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
