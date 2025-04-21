import { Student } from '../../../../domain/models'

export interface ListStudentsRepository {
  list: () => Promise<Student[]>
}
