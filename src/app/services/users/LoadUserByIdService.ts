import { LoadUserById } from '../../../domain/features/users/LoadUserById'
import { User } from '../../../domain/models'
import { LoadUserByIdRepository } from '../../contracts/repositories/user/LoadUserByIdRepository'
import { NotFoundError } from '../../errors/NotFoundError'

export class LoadUserByIdService implements LoadUserById {
  constructor (private readonly getStudentById: LoadUserByIdRepository) {}

  async execute (id: string): Promise<User> {
    const user = await this.getStudentById.getById(id)

    if (!user) throw new NotFoundError('User')

    return user
  }
}
