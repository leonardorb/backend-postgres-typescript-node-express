import { closeConnection, getConnection } from '~/packages/database'

beforeAll(() => getConnection())
afterAll(() => closeConnection())
