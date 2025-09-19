export interface CreateSchoolRepositoryParams {
  id?: string
  name: string
  cityId: string
  userId: string
}

export interface CreateSchoolRepositoryResponse {
  id: string
  name: string
  cityId: string
}
export interface CreateSchoolRepository {
  create: (params: CreateSchoolRepositoryParams) => Promise<CreateSchoolRepositoryResponse>
}
