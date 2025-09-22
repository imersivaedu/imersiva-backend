import { UpdateExperienceStatusService } from "../../../app/services/experiences/UpdateExperienceStatus";
import { PrismaExperienceRepository } from "../../../infra/db/prisma/PrismaExperienceRepository";

const experienceRepository = new PrismaExperienceRepository()
const updateExperience = new UpdateExperienceStatusService(experienceRepository)

export {updateExperience}