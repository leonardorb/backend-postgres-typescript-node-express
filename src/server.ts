import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as express from 'express'
import { Request, Response } from 'express'
import * as helmet from 'helmet'
import * as httpStatus from 'http-status'
import * as morgan from 'morgan'

import config from '~/config'

import { handleErrors } from '~/packages/api/middlewares/error'
import router from '~/packages/api/router'

const app = express()

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
    stream: process.stderr,
  }),
)

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
    stream: process.stdout,
  }),
)

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(bodyParser.json())

app.use(router)

app.use(handleErrors)

export default app
