export interface EnterExperienceRepositoryParams {
  pin: string
  joinCode?: string
}

export interface EnterExperienceRepositoryResponse {
  joinCode: string
}

export interface EnterExperienceRepository {
  enter: (params: EnterExperienceRepositoryParams) => Promise<EnterExperienceRepositoryResponse | null>
}
