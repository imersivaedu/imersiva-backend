import { EnterExperienceService } from '../../../app/services/experiences/EnterExperienceService'
import { PrismaExperienceRepository } from '../../../infra/db/prisma/PrismaExperienceRepository'

const experienceRepository = new PrismaExperienceRepository()
const enterExperienceService = new EnterExperienceService(experienceRepository)

export { enterExperienceService }
