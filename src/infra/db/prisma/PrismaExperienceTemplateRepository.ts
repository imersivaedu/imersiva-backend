import { ListExperienceTemplatesRepository } from "../../../app/contracts/repositories";
import { ExperienceTemplate, Subject } from "../../../domain/models";
import { connection } from "./connection";

export class PrismaExperienceTemplateRepository
  implements ListExperienceTemplatesRepository
{
  async list(): Promise<ExperienceTemplate[]> {
    const experienceTemplates = await connection.experienceTemplate.findMany({
      include: {
        subject: true,
      },
    });

    return experienceTemplates.map((template) => {
      return new ExperienceTemplate({
        id: template.id,
        name: template.name,
        subjectId: template.subjectId,
      });
    });
  }
}
