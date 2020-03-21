import * as httpStatus from 'http-status'
import { APIException } from './APIException'

export class NotFound extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Not Found.', httpStatus.NOT_FOUND)
  }
}
