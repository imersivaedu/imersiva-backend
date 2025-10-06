export interface ListExperienceTemplatesResponse {
  id: string;
  name: string;
  subjectId: string;
}

export interface ListExperienceTemplates {
  execute: () => Promise<ListExperienceTemplatesResponse[]>;
}
