import AppError from '@error/errorApp'
import { EMPTY_STRING, JWT_SECRET } from '@constants'
import jwt from 'jsonwebtoken'

interface VerifyJWT {
  token: string
}

export const verifyToken = ({ token }: VerifyJWT): { id: string, exp: number } => {
  if (JWT_SECRET === EMPTY_STRING) throw new AppError('JWT_SECRET is not defined', 400)
  const tokenVerified = jwt.verify(token, JWT_SECRET)
  const { id, exp } = tokenVerified as { id: string, exp: number }
  return { id, exp }
}
