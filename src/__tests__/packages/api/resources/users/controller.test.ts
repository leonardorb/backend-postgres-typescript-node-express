import { server } from '~/__tests__/config/helpers'

describe('Users Controller', () => {
  it('should list Users', async () => {
    const res = await server.get('/users')
    const { status, body } = res

    expect(status).toBe(200)
    expect(body.length >= 0).toBeTruthy()
  })
})
