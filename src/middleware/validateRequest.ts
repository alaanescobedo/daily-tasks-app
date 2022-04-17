import type { TaskClientData } from '@task/taskInterface'
import type { LoginUserClientData, SignupUserClientData } from '@auth/auth.interfaces'
import { catchAsync } from '@utils/errors/catchAsync'
import type { NextFunction, Request, Response } from 'express'
import type { SchemaOf } from 'yup'

type SchemaValidation = SignupUserClientData | TaskClientData | LoginUserClientData

const validateRequest: Function = (schema: SchemaOf<SchemaValidation>): Function => catchAsync(async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  await schema.validate(req.body)
  next()
})

export default validateRequest
