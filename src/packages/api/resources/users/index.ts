import Router from 'express-promise-router'
import { login } from '~/packages/api/resources/users/controller'

const router = Router()

router.route('/login').get(login)

export default router
