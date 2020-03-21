import * as httpStatus from 'http-status'
import { APIException } from './APIException'

export class InvalidParameter extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Invalid Request.', httpStatus.BAD_REQUEST)
  }
}
