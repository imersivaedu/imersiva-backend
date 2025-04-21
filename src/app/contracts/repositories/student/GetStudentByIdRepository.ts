import { Student } from '../../../../domain/models'

export interface GetStudentByIdRepository {
  getById: (id: string) => Promise<Student | null>
}
