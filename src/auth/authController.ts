import type { Request, Response } from 'express'
import AppError from '@error/errorApp'
import { createUser, findEmail, searchUserToLogin } from '@lib/redis/userDB'
import { comparePassword, hashPassword } from '@lib/bcryptjs'
import { catchAsync } from '@utils/errors/catchAsync'
import { createToken } from '@lib/jsonwebtoken'
import { EMPTY_STRING } from '@constants'
import type { ForgotPasswordClientData, SignupUserClientData } from './auth.interfaces'

export const signup = catchAsync(async (req: Request, res: Response) => {
  const { username, email, password }: SignupUserClientData = req.body

  const passwordHashed = hashPassword(password)

  const userCreated = await createUser({
    username,
    password: passwordHashed,
    email
  })

  const token = createToken({ id: userCreated.entityId })

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  })

  // Remove password from output
  userCreated.password = EMPTY_STRING

  return res.status(201).send({
    status: 'success',
    token,
    data: {
      user: userCreated
    }
  })
})

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email = EMPTY_STRING, password = EMPTY_STRING }: { email: string, password: string } = req.body
  if (email === EMPTY_STRING || password === EMPTY_STRING) throw new AppError('Please provide email and password!', 400)

  const user = await searchUserToLogin(email)
  const passwordCorrect = await comparePassword(password, user.password)

  if (!passwordCorrect) throw new AppError('Invalid email or password', 400)

  const token = createToken({ id: user.entityId })

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  })

  user.password = EMPTY_STRING

  return res.status(200).send({
    status: 'success',
    token,
    data: {
      user
    }
  })
})

export const forgotPassword = catchAsync(async (req: Request, _res: Response) => {
  const { email }: ForgotPasswordClientData = req.body

  const user = await findEmail(email)
  if (user === undefined) throw new AppError('User not found', 404)
})
