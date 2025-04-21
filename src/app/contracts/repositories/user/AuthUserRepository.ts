import { User } from '../../../../domain/models'

export interface AuthUserRepositoryParams {
  email: string
  password: string
}

export interface AuthUserRepository {
  auth: (params: AuthUserRepositoryParams) => Promise<User | null>
}
