import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'
import jwt from 'jsonwebtoken'

interface CreateJWT {
  id: string
  secret?: string
  expiresIn?: string | number | undefined
}

export const createToken = ({ id, secret = "", expiresIn = 1000 * 60 * 30 }: CreateJWT): string => {
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is not defined', 400)
  return jwt.sign({ id }, `${JWT_SECRET}${secret}`, { expiresIn })
}
