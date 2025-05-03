
export interface CreateExperienceParams {
  userId: string
  studentIds: string[]
}

export interface CreateExperienceResponse {
  userId: string
  studentIds: string[]
}

export interface CreateExperience {
  execute: ({ userId, studentIds }: CreateExperienceParams) => Promise<CreateExperienceResponse | null>
}
