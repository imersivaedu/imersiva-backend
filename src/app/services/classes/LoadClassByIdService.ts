import { Class } from '../../../domain/models'
import { GetClassByIdRepository } from '../../contracts'
import { NotFoundError } from '../../errors/NotFoundError'

export class LoadClassById implements GetClassByIdRepository {
  constructor (private readonly getClassByIdRepository: GetClassByIdRepository) {}
  async getById (id: string): Promise<Class | null> {
    const classOfStudent = await this.getClassByIdRepository.getById(id)
    if (!classOfStudent) throw new NotFoundError('class')

    return classOfStudent
  }
}
