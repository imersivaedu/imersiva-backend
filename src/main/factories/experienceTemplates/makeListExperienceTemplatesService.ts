import { ListExperienceTemplatesService } from "../../../app/services/experienceTemplates/ListExperienceTemplatesService";
import { PrismaExperienceTemplateRepository } from "../../../infra/db/prisma/PrismaExperienceTemplateRepository";

const prismaExperienceTemplateRepository =
  new PrismaExperienceTemplateRepository();
export const listExperienceTemplatesService =
  new ListExperienceTemplatesService(prismaExperienceTemplateRepository);
