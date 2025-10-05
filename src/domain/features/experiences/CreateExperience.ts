export interface CreateExperienceParams {
  userId: string;
  templateId: string;
  classId: string;
}

export interface CreateExperienceResponse {
  id: string;
  userId: string;
  templateId: string;
  pin: string;
  status: string;
}

export interface CreateExperience {
  execute: ({
    userId,
    templateId,
    classId,
  }: CreateExperienceParams) => Promise<CreateExperienceResponse | null>;
}
