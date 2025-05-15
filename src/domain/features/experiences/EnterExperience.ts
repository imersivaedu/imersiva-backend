export interface EnterExperienceParams {
  pin: string
  joinCode: string
  studentId: string
}

export interface EnterExperienceResponse {
  joinCode: string
}

export interface EnterExperience {
  execute: ({ pin, joinCode, studentId }: EnterExperienceParams) => Promise<EnterExperienceResponse | null>
}
