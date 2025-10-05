export interface CreateExperienceRepositoryParams {
  userId: string;
  classId: string;
  templateId: string;
}

export interface CreateExperienceRepositoryResponse {
  id: string;
  userId: string;
  templateId: string;
  pin: string;
  status: string;
}

export interface CreateExperienceRepository {
  create: (
    params: CreateExperienceRepositoryParams
  ) => Promise<CreateExperienceRepositoryResponse | null>;
}
