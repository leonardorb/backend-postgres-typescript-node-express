import joi from '@hapi/joi'
import { createValidator } from 'express-joi-validation'

const validator = createValidator({ passError: true })

export const enum ContainerTypes {
  Body = 'body',
  Fields = 'fields',
  Headers = 'headers',
  Params = 'params',
  Query = 'query',
}

export const isValid = (type: ContainerTypes, schema: joi.Schema) => validator[type](schema)
