import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AppError from '@error/errorApp'
import { catchAsync } from '@utils/errors/catchAsync'
import { searchUserById } from '@lib/redis/userDB'

export const authProtect = catchAsync(async (req: Request, _res: Response, next: NextFunction) => {
  const { authorization = '' } = req.headers
  const { cookies } = req as { cookies: { jwt: string } }

  const token: string = authorization?.toLocaleLowerCase().startsWith('bearer ')
    ? authorization.substring(7)
    : cookies?.jwt ??
    ''

  if (token === '' || process.env['JWT_SECRET'] === undefined) throw new AppError('You are not logged in', 401)

  const { id } = jwt.verify(token, process.env['JWT_SECRET']) as { id: string }

  const currentUser = await searchUserById(id)

  req.cookies = { ...req.cookies, user: currentUser }

  next()
})
