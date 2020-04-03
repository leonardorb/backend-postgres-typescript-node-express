import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { getConnection } from 'typeorm'
import { User } from '~/packages/database/models/user'
// import { Forbidden } from '../../helpers/exceptions/forbidden'

export const list = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const users = await getConnection()
      .getRepository(User)
      .createQueryBuilder('user')
      .getMany()

    return res.status(200).send(users)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ hello: 'world' })
}
