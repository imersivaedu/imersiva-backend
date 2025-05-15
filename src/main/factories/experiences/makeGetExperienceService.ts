import { GetExperienceService } from '../../../app/services/experiences/GetExperienceService'
import { PrismaExperienceRepository } from '../../../infra/db/prisma/PrismaExperienceRepository'

const experienceRepository = new PrismaExperienceRepository()
const getExperienceService = new GetExperienceService(experienceRepository)

export { getExperienceService }
