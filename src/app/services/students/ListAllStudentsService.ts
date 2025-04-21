import { Student } from '../../../domain/models'
import { ListStudentsRepository } from '../../contracts/repositories'

export class ListAllStudentsService {
  constructor (
    private readonly listStudentsRepository: ListStudentsRepository
  ) {}

  async execute (): Promise<Student[]> {
    const data = await this.listStudentsRepository.list()

    return data
  }
}
