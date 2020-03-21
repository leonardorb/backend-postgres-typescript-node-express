import * as httpStatus from 'http-status'
import { APIException } from './APIException'

export class BadRequest extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Ops! Something went wrong.', httpStatus.BAD_REQUEST)
  }
}
