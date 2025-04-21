import { User } from '../../../../domain/models'

export interface LoadUserByIdRepository {
  getById: (id: string) => Promise<User | null>
}
