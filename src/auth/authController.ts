import type { Request, Response } from 'express'
import AppError from '@error/errorApp'
import { createUser, findUserByEmail, searchUserById, searchUserToLogin, updatePassword, verifyAccount } from '@lib/redis/userDB'
import { comparePassword, hashPassword } from '@lib/bcryptjs'
import { catchAsync } from '@utils/errors/catchAsync'
import { createToken } from '@lib/jsonwebtoken'
import { EMPTY_STRING } from '@constants'
import type { ForgotPasswordClientData, SignupUserClientData } from './auth.interfaces'
import { verifyToken } from 'lib/jsonwebtoken/token.verify'
import sendEmail from '@utils/email/sendEmail'

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

  await sendEmail({ user: userCreated, template: 'welcome', token })

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

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  // Todo: refactor duplicated code
  const { email = '' }: ForgotPasswordClientData = req.body
  if (email === EMPTY_STRING) throw new AppError('Please provide email!', 400)
  const user = await findUserByEmail(email)
  if (user === null || !user.active) throw new AppError('User not found', 404)
  const token = createToken({ id: user.entityId, expiresIn: 1000 * 60 * 15 }) // 1000 * 60 * 15 = 15 minutes
  await sendEmail({ user: user, template: 'forgotPassword', token })

  return res.status(200).send({ status: 'success', message: 'Email sent' })
})

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
  // TODO refactor duplicated code
  const { token = EMPTY_STRING } = req.query as { token: string }
  if (token === EMPTY_STRING) throw new AppError('Token is not defined', 400)
  const { id, exp } = verifyToken({ token })
  if (id === undefined) throw new AppError('Token is not valid', 400)
  const user = await searchUserById(id)
  if (user === null || !user.active) throw new AppError('User not found', 404)
  if (user.updatedAt === null || user.updatedAt === EMPTY_STRING) throw new AppError('User not found', 404)
  const updatedAtTime = new Date(user.updatedAt).getTime()
  if (updatedAtTime > exp) throw new AppError('Token is expired', 400)

  const { password: newPassword = EMPTY_STRING } = req.body
  if (newPassword === EMPTY_STRING) throw new AppError('Please provide password!', 400)
  const passwordHashed = hashPassword(newPassword)
  const userUpdated = await updatePassword(id, passwordHashed)
  userUpdated.password = EMPTY_STRING

  return res.status(200).send({ status: 'success', data: { user: userUpdated } })
})

export const confirmAccount = catchAsync(async (req: Request, res: Response) => {
  const { token = EMPTY_STRING } = req.query as { token: string }
  if (token === EMPTY_STRING) throw new AppError('Token is not defined', 400)
  const { id } = verifyToken({ token })
  if (id === undefined) throw new AppError('Token is not valid', 400)
  const user = await searchUserById(id)
  if (!user.active || user.active === null) throw new AppError('User not found', 404)
  const verified = await verifyAccount(id)
  if (!verified) throw new AppError('Account could not be verified', 400)

  return res.status(200).send({ status: 'success', verified })
})
