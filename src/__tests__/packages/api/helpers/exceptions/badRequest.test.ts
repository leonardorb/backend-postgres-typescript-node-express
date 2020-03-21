import { BadRequest } from '~/packages/api/helpers/exceptions/badRequest'

describe('APIException', () => {
  it('should generate an APIException', () => {
    const apiException = new BadRequest()

    expect(apiException.status).toBe(400)
    expect(apiException.message).toBe('Ops! Something went wrong.')
    expect(apiException.errors).toEqual({})
  })
})
