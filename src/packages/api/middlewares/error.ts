import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import config from '~/config'
import { APIException } from '../helpers/exceptions/APIException'
import { Forbidden } from '../helpers/exceptions/forbidden'
import { InvalidParameter } from '../helpers/exceptions/invalidParameter'
import { NotFound } from '../helpers/exceptions/notFound'
import { Unauthorized } from '../helpers/exceptions/unauthorized'

import logger from '~/packages/api/helpers/logging'

interface ErrorResponse {
  code: number
  message: string
  errors?: object
  stack?: string
}

const convertToException = (err: any): APIException | Forbidden | InvalidParameter | NotFound | Unauthorized => {
  if (err && err.error && err.error.isJoi) {
    return new InvalidParameter(undefined, err.error.toString())
  }

  if (!(err instanceof APIException)) {
    return new APIException()
  }

  return err
}

export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  let response: ErrorResponse = {
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message: 'Something bad happened.',
  }

  const { status, errors, stack, message } = convertToException(err)

  const responseStatus = errors.status || status

  response = {
    ...response,
    code: responseStatus,
    errors,
    message,
    stack,
  }

  if (config.NODE_ENV === 'local') {
    delete response.stack
  }

  if (Object.entries(errors).length === 0 && errors.constructor === Object) {
    delete response.errors
  }

  logger.error(`${responseStatus} ${response.message}`, { url: req.originalUrl })

  return res
    .status(response.code)
    .json(response)
    .end()
}
