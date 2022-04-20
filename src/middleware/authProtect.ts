import type { NextFunction, Request, Response } from 'express'
import AppError from '@error/errorApp'
import { catchAsync } from '@utils/errors/catchAsync'
import { searchUserById } from '@lib/redis/userDB'
import { EMPTY_STRING } from '@constants'
import { verifyToken } from 'lib/jsonwebtoken/token.verify'

export const authProtect = catchAsync(async (req: Request, _res: Response, next: NextFunction) => {
  const { authorization = EMPTY_STRING } = req.headers
  const { cookies } = req as { cookies: { jwt: string } }
  const query = req.query as { token: string }

  let token: string = ''

  if (authorization?.toLocaleLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7)
  } else if (cookies?.jwt !== undefined) {
    token = cookies.jwt
  } else if (query?.token !== undefined) {
    token = query.token
  }

  const { id, exp } = verifyToken({ token })
  if (id === undefined) throw new AppError('Token is not valid', 400)
  if (exp * 1000 < Date.now()) throw new AppError('Token is expired', 400)

  const currentUser = await searchUserById(id)
  if (!currentUser.active || currentUser.active === null) throw new AppError('User not found', 404)

  req.locals = {
    user: currentUser,
    token: { id, exp }
  }
  next()
})
