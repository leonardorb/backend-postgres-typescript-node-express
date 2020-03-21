import * as httpStatus from 'http-status'

export class APIException extends Error {
  constructor(
    public errors: any = {},
    public message: string = 'Ops! Something went wrong.',
    public status: number = httpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super(message)
    this.name = this.constructor.name
    if (message) {
      this.message = message
    }
    if (status) {
      this.status = status
    }
    Error.captureStackTrace(this, this.constructor)
  }
}
