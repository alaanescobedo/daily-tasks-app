import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'
import jwt from 'jsonwebtoken'

export const createToken = (id: string): string => {
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is not defined', 400)
  return jwt.sign({ id }, JWT_SECRET)
}
