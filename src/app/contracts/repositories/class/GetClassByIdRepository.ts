import { Class } from '../../../../domain/models'

export interface GetClassByIdRepository {
  getById: (id: string) => Promise<Class | null>
}
