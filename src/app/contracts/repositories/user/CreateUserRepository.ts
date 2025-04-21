export interface CreateUserRepositoryParams {
  id?: string
  name: string
  email: string
  password: string
}

export interface CreateUserRepositoryResponse {
  id: string
  name: string
  email: string
}

export interface CreateUserRepository {
  create: (params: CreateUserRepositoryParams) => Promise<CreateUserRepositoryResponse>
}
