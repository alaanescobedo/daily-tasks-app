import type { Request, Response } from 'express'
import { createIndex, searchUserById, searchUsers, updateUserDB, updateUserStatusAccount } from '@lib/redis/userDB'
import { catchAsync } from '@utils/errors/catchAsync'
import type { UserUpdateData } from '@user/userInterface'

export const getAllUsers = catchAsync(async (_req: Request, res: Response): Promise<Response> => {
  const users = await searchUsers()
  return res.status(200).send(users)
})
export const getUserById = catchAsync(async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params as { id: string }
  const user = await searchUserById(id)
  return res.status(200).send(user)
})
export const updateUser = catchAsync(async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params as { id: string }
  const { username, email } = req.body as UserUpdateData

  const userUpdated = await updateUserDB(id, { username, email })
  return res.status(200).send(userUpdated)
})
export const deactivateUser = catchAsync(async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params as { id: string }
  const { status, message } = await updateUserStatusAccount(id, false)
  return res.status(status).send({ message })
})

export const getIndex = async (_req: Request, res: Response): Promise<Response> => {
  await createIndex()
  return res.status(200).send({ message: 'Index created' })
}
