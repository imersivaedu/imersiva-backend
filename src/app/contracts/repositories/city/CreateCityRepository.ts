export interface CreateCityRepositoryParams {
  id?: string
  name: string
  userId: string
}

export interface CreateCityRepositoryResponse {
  id: string
  name: string
  userId: string
}

export interface CreateCityRepository {
  create: (params: CreateCityRepositoryParams) => Promise<CreateCityRepositoryResponse>
}
