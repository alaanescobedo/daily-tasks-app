import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AppError from '@error/errorApp'
import { createUser } from '@lib/redis/userDB'
import { catchAsync } from '@utils/errors/catchAsync'
import type { NewUserClientData } from '@user/userInterface'

const createToken = (id: string): string => {
  if (process.env['JWT_SECRET'] === undefined) {
    throw new AppError('JWT_SECRET is not defined', 400)
  }
  const token = jwt.sign({ id }, process.env['JWT_SECRET'])
  return token
}

export const signup = catchAsync(async (req: Request, res: Response) => {
  const { username, email, password }: NewUserClientData = req.body

  const userCreated = await createUser({
    username,
    password,
    email
  })

  const token = createToken(userCreated.entityId)

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  })

  // Remove password from output
  userCreated.password = ''

  return res.status(201).send({
    status: 'success',
    token,
    data: {
      user: userCreated
    }
  })
})
