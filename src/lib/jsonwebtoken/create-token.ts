import AppError from '@error/errorApp'
import jwt from 'jsonwebtoken'

export const createToken = (id: string): string => {
  if (process.env['JWT_SECRET'] === undefined) throw new AppError('JWT_SECRET is not defined', 400)
  return jwt.sign({ id }, process.env['JWT_SECRET'])
}
