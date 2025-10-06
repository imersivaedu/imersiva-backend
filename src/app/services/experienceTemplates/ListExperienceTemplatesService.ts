import {
  ListExperienceTemplates,
  ListExperienceTemplatesResponse,
} from "../../../domain/features/experienceTemplates/ListExperienceTemplates";
import { ListExperienceTemplatesRepository } from "../../contracts/repositories";

export class ListExperienceTemplatesService implements ListExperienceTemplates {
  constructor(
    private readonly listExperienceTemplatesRepository: ListExperienceTemplatesRepository
  ) {}

  async execute(): Promise<ListExperienceTemplatesResponse[]> {
    const experienceTemplates =
      await this.listExperienceTemplatesRepository.list();

    return experienceTemplates.map((template) => ({
      id: template.getId(),
      name: template.getName(),
      subjectId: template.getSubjectId(),
    }));
  }
}
