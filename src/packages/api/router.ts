import * as express from 'express'
import userRouter from '~/packages/api/resources/users/index'

const router = express.Router()

router.use('/users', userRouter)

export default router
