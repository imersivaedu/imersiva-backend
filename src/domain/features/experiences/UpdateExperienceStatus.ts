export interface UpdateExperienceStatusParams {
  experienceId: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusResponse {
  id: string;
  experienceId: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatus {
  execute: ({
    experienceId,
    status,
  }: UpdateExperienceStatusParams) => Promise<UpdateExperienceStatusResponse | null>;
}