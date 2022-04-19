import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'
import jwt from 'jsonwebtoken'

interface CreateJWT {
  id: string
  expiresIn?: string | number | undefined
}

export const createToken = ({ id }: CreateJWT): string => {
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is not defined', 400)
  return jwt.sign({ id }, JWT_SECRET)
}
