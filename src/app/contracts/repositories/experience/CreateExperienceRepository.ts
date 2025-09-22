export interface CreateExperienceRepositoryParams {
  userId: string;
  classId: string;
  templateId: string;
}

export interface CreateExperienceRepositoryResponse {
  userId: string;
  templateId: string;
  pin: string;
}

export interface CreateExperienceRepository {
  create: (
    params: CreateExperienceRepositoryParams
  ) => Promise<CreateExperienceRepositoryResponse | null>;
}
