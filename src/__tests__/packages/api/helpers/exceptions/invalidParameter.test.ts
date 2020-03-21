import { InvalidParameter } from '~/packages/api/helpers/exceptions/invalidParameter'

describe('APIException', () => {
  it('should generate an APIException', () => {
    const apiException = new InvalidParameter()

    expect(apiException.status).toBe(400)
    expect(apiException.message).toBe('Invalid Request.')
    expect(apiException.errors).toEqual({})
  })
})
