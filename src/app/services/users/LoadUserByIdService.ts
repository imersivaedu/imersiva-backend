import { getUserResponse, LoadUserById } from '../../../domain/features/users/LoadUserById'
import { User } from '../../../domain/models'
import { LoadUserByIdRepository } from '../../contracts/repositories/user/LoadUserByIdRepository'
import { NotFoundError } from '../../errors/NotFoundError'

export class LoadUserByIdService implements LoadUserById {
  constructor (private readonly getStudentById: LoadUserByIdRepository) {}

  async execute (id: string): Promise<getUserResponse> {
    const user = await this.getStudentById.getById(id)

    if (!user) throw new NotFoundError('User')

    return {
      id: user.getId(),
      name: user.getEmail(),
      email: user.getEmail()
    }
  }
}
