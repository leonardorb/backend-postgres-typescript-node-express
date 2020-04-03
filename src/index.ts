import * as fs from 'fs'
import * as https from 'https'
import config from '~/config'
import { getConnection } from './packages/database'
import server from './server'

const PORT = config.SERVER_PORT || '3000'

async function onStart(): Promise<any> {
  try {
    await getConnection()
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err)
    throw err
  }
}

const currentServer = https.createServer(
  {
    cert: fs.readFileSync(`${__dirname}/../server.cert`, 'utf8'),
    key: fs.readFileSync(`${__dirname}/../server.key`, 'utf8'),
  },
  server,
)

currentServer.listen(PORT, onStart)
// tslint:disable-next-line:no-console
console.log(`Server up and running on https://localhost:${PORT}`)
