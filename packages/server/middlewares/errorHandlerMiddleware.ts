import { NextFunction, Response, Request } from 'express'
import { errorHandler } from '../utils/errorHandler'

export const errorHandlerMiddleware = function (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  errorHandler(res, error as Error)
  next()
}
