import { Experience } from "../../../../domain/models";

export interface GetExperienceRepositoryParams {
  pin: string;
}

export interface GetExperienceRepositoryResponse {
  id: string;
  userId: string;
  templateId: string;
  templateName: string;
  pin: string;
  joinCode: string | null;
  enterDate: Date | null;
  students: {
    id: string;
    name: string;
    classId: string;
    createdAt: Date | null; // Ajuste aqui para ser 'Date | null'
  }[];
}

export interface GetExperienceRepository {
  get: (
    params: GetExperienceRepositoryParams
  ) => Promise<GetExperienceRepositoryResponse | null>;
}
