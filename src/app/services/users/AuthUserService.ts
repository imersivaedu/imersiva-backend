import { AuthUser, AuthUserParams, AuthUserResponse } from '../../../domain/features/users/AuthUser'
import { AuthUserRepository } from '../../contracts/repositories/user/AuthUserRepository'
import { sign } from 'jsonwebtoken'
import { CredentialsError } from '../../errors/CredentialsError'

export class AuthUserService implements AuthUser {
  constructor (
    private readonly authUserRepository: AuthUserRepository
  ) {}

  async execute ({ email, password }: AuthUserParams): Promise<AuthUserResponse> {
    const user = await this.authUserRepository.auth({ email, password })

    if (!user) throw new CredentialsError()

    const payload = {
      email: user.getEmail(),
      name: user.getName()
    }

    const secretKey = process.env.SECRET_KEY as string

    const token = sign(payload, secretKey, {
      subject: user.getId(),
      expiresIn: '90d'
    })

    return {
      token: `Bearer ${token}`,
      user: {
        email: user.getEmail(),
        name: user.getName(),
        id: user.getId()
      }
    }
  }
}
