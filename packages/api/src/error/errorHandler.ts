import type { NextFunction, Request, Response, Send } from 'express'
import type { IAppError } from '@error/errorInterface'

const errorHandler = (err: IAppError, req: Request, res: Response, _next?: NextFunction): Response<Send> => {
  err.statusCode = err.statusCode ?? 500
  err.status = err.status ?? 'error'

  if (process.env['NODE_ENV'] !== 'production' && req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).send({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack
    })
  }

  return res.status(500).send({ message: 'Something went wrong' })
}

export default errorHandler
