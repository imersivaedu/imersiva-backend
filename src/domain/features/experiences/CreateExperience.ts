export interface CreateExperienceParams {
  userId: string;
  templateId: string;
  classId: string;
}

export interface CreateExperienceResponse {
  userId: string;
  templateId: string;
  pin: string;
}

export interface CreateExperience {
  execute: ({
    userId,
    templateId,
    classId,
  }: CreateExperienceParams) => Promise<CreateExperienceResponse | null>;
}
