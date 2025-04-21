import { School } from '../../../../domain/models'

export interface GetSchoolByIdRepository {
  getById: (id: string) => Promise<School | null>
}
