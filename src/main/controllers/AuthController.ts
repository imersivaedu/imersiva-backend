import { Request, Response } from 'express'
import { authUserService } from '../factories/user/makeAuthenticateUserService'
import Joi from 'joi'
import { RequiredFieldsIsNotProvided } from '../../shared/errors/RequiredFieldsIsNotProvided'

export class AuthController {
  async authenticate (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
    })

    const validation = schema.validate(req.body)

    if (validation.error) {
      throw new RequiredFieldsIsNotProvided(validation.error.message)
    }

    const auth = await authUserService.execute({ email, password })

    return res.json(auth)
  }
}
