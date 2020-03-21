import * as httpStatus from 'http-status'
import { APIException } from './APIException'

export class Forbidden extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Forbidden.', httpStatus.FORBIDDEN)
  }
}
