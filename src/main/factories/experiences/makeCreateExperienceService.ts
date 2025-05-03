import { CreateExperienceService } from '../../../app/services/experiences/CreateExperienceService'
import { PrismaExperienceRepository } from '../../../infra/db/prisma/PrismaExperienceRepository'

const experienceRepository = new PrismaExperienceRepository()
const createExperienceService = new CreateExperienceService(experienceRepository)

export { createExperienceService }
