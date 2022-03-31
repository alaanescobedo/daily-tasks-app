import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AppError from '@error/errorApp'
import { createUser, searchUserLogged } from '@lib/redis/userDB'
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

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email = '', password = '' }: { email: string, password: string } = req.body

  if (email === '' || password === '') throw new AppError('Please provide email and password!', 400)

  const user = await searchUserLogged(email, password)

  const token = createToken(user.entityId)

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  })

  user.password = ''

  return res.status(200).send({
    status: 'success',
    token,
    data: {
      user
    }
  })
})
