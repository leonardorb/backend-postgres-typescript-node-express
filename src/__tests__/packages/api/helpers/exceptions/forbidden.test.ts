import { Forbidden } from '~/packages/api/helpers/exceptions/forbidden'

describe('APIException', () => {
  it('should generate an APIException', () => {
    const apiException = new Forbidden()

    expect(apiException.status).toBe(403)
    expect(apiException.message).toBe('Forbidden.')
    expect(apiException.errors).toEqual({})
  })
})
