import { ListStudents, ListStudentsResponse } from '../../../domain/features/students/ListStudents'
import { ListStudentsWithResultByClassIdRepository } from '../../contracts'

export class ListStudentsService implements ListStudents {
  constructor (
    private readonly listStudentsRepository: ListStudentsWithResultByClassIdRepository
  ) {}

  async execute (classId: string): Promise<ListStudentsResponse[]> {
    const students = await this.listStudentsRepository.listWithResultByClassId(classId)

    return students
  }
}
