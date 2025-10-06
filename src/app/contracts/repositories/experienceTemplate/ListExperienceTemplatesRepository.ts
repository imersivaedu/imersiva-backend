import { ExperienceTemplate } from "../../../../domain/models";

export interface ListExperienceTemplatesRepository {
  list: () => Promise<ExperienceTemplate[]>;
}
