import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'
import jwt from 'jsonwebtoken'

interface VerifyJWT {
  token: string
}

export const verifyToken = ({ token }: VerifyJWT): string => {
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is not defined', 400)
  const { id } = jwt.verify(token, JWT_SECRET) as { id: string }
  return id
}
