
export interface UpdateExperienceStatusRepositoryParams {
  experienceId: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusRepositoryResponse {
  id: string;
  experienceId: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusRepository {
  update: (
    params: UpdateExperienceStatusRepositoryParams
  ) => Promise<UpdateExperienceStatusRepositoryResponse | null>;
}