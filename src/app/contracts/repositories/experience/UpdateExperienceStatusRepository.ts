
export interface UpdateExperienceStatusRepositoryParams {
  pin: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusRepositoryResponse {
  id: string;
  pin: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusRepository {
  update: (
    params: UpdateExperienceStatusRepositoryParams
  ) => Promise<UpdateExperienceStatusRepositoryResponse | null>;
}