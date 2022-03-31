import type { Request, Response } from 'express'
import { createIndex, searchUsers } from '@lib/redis/userDB'
import { catchAsync } from '@utils/errors/catchAsync'

export const getAllUsers = catchAsync(async (_req: Request, res: Response): Promise<Response> => {
  const users = await searchUsers()
  return res.status(200).send(users)
})

export const getIndex = async (_req: Request, res: Response): Promise<Response> => {
  await createIndex()
  return res.status(200).send({ message: 'Index created' })
}
