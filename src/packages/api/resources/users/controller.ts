import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { Forbidden } from '../../helpers/exceptions/forbidden'

export const login = async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ hello: 'world' })
}
