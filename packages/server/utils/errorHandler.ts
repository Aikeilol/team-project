import { Response } from 'express'

interface ErrorResponse {
  message?: string
  code?: number
}

export const errorHandler = (
  res: Response,
  err: Error | null,
  { message = 'Internal Server Error', code = 500 }: ErrorResponse = {}
) => {
  console.log(err)
  res.status(code).json({ message })
}
