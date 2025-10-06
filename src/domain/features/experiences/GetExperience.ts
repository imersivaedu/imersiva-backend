import { Experience, Student } from "../../models";

export interface GetExperienceParams {
  pin: string;
}

export interface GetExperienceResponse {
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
    createdAt: Date | null;
  }[];
}

export interface GetExperience {
  execute: ({
    pin,
  }: GetExperienceParams) => Promise<GetExperienceResponse | null>;
}
