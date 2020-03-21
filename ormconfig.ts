import { ConnectionOptions } from 'typeorm'
import config from './src/config'

const connectionOptions: ConnectionOptions = {
  cli: {
    entitiesDir: 'src/packages/database/models',
    migrationsDir: 'src/packages/database/migrations',
  },
  database: config.DB.NAME,
  entities: ['src/packages/database/models/*.ts'],
  host: config.DB.HOST,
  logging: false,
  migrations: ['src/packages/database/migrations/*.ts'],
  password: config.DB.PASSWORD,
  port: config.DB.PORT,
  synchronize: false,
  type: 'postgres',
  username: config.DB.USER,
}

module.exports = connectionOptions
