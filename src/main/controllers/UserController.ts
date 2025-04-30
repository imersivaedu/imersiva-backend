import { Request, Response } from 'express'
import { createUserService } from '../factories/user/makeCreateUserService'
import { NotFoundError } from '../../app/errors/NotFoundError'
import { loadUserByIdService } from '../factories/user/makeLoadUserByIdService'
import Joi from 'joi'
import { RequiredFieldsIsNotProvided } from '../../shared/errors/RequiredFieldsIsNotProvided'
export class UserController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })

    const validation = schema.validate(req.body)

    if (validation.error) {
      throw new RequiredFieldsIsNotProvided(validation.error.message)
    }

    const user = await createUserService.execute({ name, email, password })

    return res.json(user)
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const userid = req.params.id

    if (!userid) throw new NotFoundError('User id')
    try {
      const user = await loadUserByIdService.execute(userid)

      return res.json(user)
    } catch (error: any) {
      return res.status(400).send(error.message)
    }
  }
}
