import app from '../../server'
import * as request from 'supertest'

export const server = request(app)
