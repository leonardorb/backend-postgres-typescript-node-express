import 'reflect-metadata'
import { Connection, createConnection } from 'typeorm'

let connection: Connection

export async function getConnection(): Promise<Connection> {
  if (connection) {
    return connection
  }

  connection = await createConnection()

  return connection
}

export async function closeConnection(): Promise<void> {
  if (connection) {
    return connection.close()
  }
}
