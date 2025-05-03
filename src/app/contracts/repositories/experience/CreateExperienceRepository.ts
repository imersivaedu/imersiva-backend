export interface CreateExperienceRepositoryParams {
  userId: string
  studentIds: string[]
}

export interface CreateExperienceRepositoryResponse {
  userId: string
  studentIds: string[]
}

export interface CreateExperienceRepository {
  create: (params: CreateExperienceRepositoryParams) => Promise<CreateExperienceRepositoryResponse | null>
}