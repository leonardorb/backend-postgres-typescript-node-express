import { APIException } from '~/packages/api/helpers/exceptions/APIException'

describe('APIException', () => {
  it('should generate an API Exception', () => {
    const apiException = new APIException()

    expect(apiException.status).toBe(500)
    expect(apiException.message).toBe('Ops! Something went wrong.')
    expect(apiException.errors).toEqual({})
    expect(apiException.stack).toBeDefined()
  })

  it('should generate a custom API Exception', () => {
    const apiException = new APIException(undefined, 'Custom Error Message.', 400)

    expect(apiException.status).toBe(400)
    expect(apiException.message).toBe('Custom Error Message.')
    expect(apiException.errors).toEqual({})
    expect(apiException.stack).toBeDefined()
  })
})
