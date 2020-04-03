import { server } from '~/__tests__/config/helpers'

describe('Users Controller', () => {
  it('should list Users', async () => {
    const res = await server.get('/users')

    expect(res.status).toBe(200)
    expect(res.body.length).not.toBe(0)
  })
})
