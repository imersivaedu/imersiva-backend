export interface CreateExperienceRepositoryParams {
  userId: string;
  classId: string;
  name: string;
}

export interface CreateExperienceRepositoryResponse {
  userId: string;
  name?: string;
  pin: string;
}

export interface CreateExperienceRepository {
  create: (
    params: CreateExperienceRepositoryParams
  ) => Promise<CreateExperienceRepositoryResponse | null>;
}
