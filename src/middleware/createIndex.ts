import type { NextFunction, Request, Response } from 'express'
import client, { connect, disconnect } from '@lib/redis/client'
import { catchAsync } from '@utils/errors/catchAsync'
import taskSchema from '@task/taskModel'
import userSchema from '@user/userModel'

const createIndex = catchAsync(async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
  await connect()
  await client.fetchRepository(taskSchema).createIndex()
  await client.fetchRepository(userSchema).createIndex()
  await disconnect()
  next()
})

export default createIndex
