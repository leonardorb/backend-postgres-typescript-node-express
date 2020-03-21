import * as faker from 'faker'
import { User } from '~/packages/database/models/user'

const email = faker.internet.email()

describe('User Model', () => {
  it('should add User', async () => {
    const model = new User()
    model.email = email
    await model.save()

    const user = await User.createQueryBuilder()
      .select()
      .where({ email })
      .getOne()

    expect(user).not.toBeUndefined()
    expect(user.email).toBe(email)
  })
})
