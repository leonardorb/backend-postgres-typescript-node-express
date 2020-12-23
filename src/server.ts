import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as express from 'express'
import { Request, Response } from 'express'
import * as helmet from 'helmet'
import * as httpStatus from 'http-status'
import * as morgan from 'morgan'
import * as rateLimit  from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';
import * as xss from 'xss-clean';
import * as hpp from 'hpp';

import config from '~/config'

import { handleErrors } from '~/packages/api/middlewares/error'
import router from '~/packages/api/router'

const app = express()

app.enable('trust proxy');

// Set Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Set Cookie parser
app.use(cookieParser());

// Set security HTTP headers
app.use(helmet());

//Limit requests from the same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  messege: 'Too many requests from this IP, Please try again in an hour!'
});
app.use('/users', limiter);


//Data sanitization against XSS
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Implement CORS
app.use(cors());

app.options('*', cors());

app.use(compression());

app.disable('x-powered-by');

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

app.use(bodyParser.json())

app.use(router)

app.use(handleErrors)

export default app
