import { CreateUserRepository, CreateUserRepositoryParams, CreateUserRepositoryResponse } from '../../../app/contracts'
import { AuthUserRepository, AuthUserRepositoryParams } from '../../../app/contracts/repositories/user/AuthUserRepository'
import { LoadUserByIdRepository } from '../../../app/contracts/repositories/user/LoadUserByIdRepository'
import { User } from '../../../domain/models'
import { AlreadyExistsError } from '../../../shared/errors/AlreadyExistsError'
import { checkPassword } from '../../../shared/helpers/checkPassword'
import { connection } from './connection'

export class PrismaUserRepository implements CreateUserRepository, LoadUserByIdRepository, AuthUserRepository {
  async create ({ name, email, password }: CreateUserRepositoryParams): Promise<CreateUserRepositoryResponse> {
    const userAlreadyExists = await connection.user.findFirst({ where: { email } })
    if (userAlreadyExists) throw new AlreadyExistsError('user')

    const createdUser = await connection.user.create({ data: { name, email, password } })

    return {id: createdUser.id, name: createdUser.name, email: createdUser.email}
  }

  async getById (id: string): Promise<User | null> {
    const user = await connection.user.findFirst({ where: { id } })

    if (!user) return null

    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password as string
    })
  }

  async auth ({ email, password }: AuthUserRepositoryParams): Promise<User | null> {
    const user = await connection.user.findFirst({ where: { email } })

    if (!user) return null

    const passwordIsValid = await checkPassword(password, user.password as string)
    if (!passwordIsValid) return null

    return new User({
      email: user.email,
      name: user.name,
      id: user.id,
      password: user.password as string
    })
  }
}
