import * as httpStatus from 'http-status'
import { APIException } from './APIException'

export class Unauthorized extends APIException {
  constructor(errors?: any, message?: string) {
    super(errors, message || 'Unauthorized.', httpStatus.UNAUTHORIZED)
  }
}
