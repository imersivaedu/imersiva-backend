export interface CreateExperienceParams {
  userId: string;
  name: string;
  classId: string;
}

export interface CreateExperienceResponse {
  userId: string;
  name?: string;
  pin: string;
}

export interface CreateExperience {
  execute: ({
    userId,
    name,
    classId,
  }: CreateExperienceParams) => Promise<CreateExperienceResponse | null>;
}
