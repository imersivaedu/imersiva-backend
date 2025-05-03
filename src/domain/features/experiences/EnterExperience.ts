export interface EnterExperienceParams {
  pin: string
  joinCode: string
}

export interface EnterExperienceResponse {
  joinCode: string
}

export interface EnterExperience {
  execute: ({ pin, joinCode }: EnterExperienceParams) => Promise<EnterExperienceResponse | null>
}
