export interface UpdateExperienceStatusParams {
  pin: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatusResponse {
  id: string;
  pin: string;
  status: 'BEGINNING' | 'ONGOING' | 'ENDED';
}

export interface UpdateExperienceStatus {
  execute: ({
    pin,
    status,
  }: UpdateExperienceStatusParams) => Promise<UpdateExperienceStatusResponse | null>;
}