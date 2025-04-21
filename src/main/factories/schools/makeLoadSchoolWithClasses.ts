import { LoadSchoolWithClassesService } from '../../../app/services/schools/LoadSchoolWithClassesService'
import { PrismaSchoolRepository } from '../../../infra/db/prisma/PrismaSchoolRepository'

const getSchoolWithClassRepository = new PrismaSchoolRepository()
const loadSchoolWithService = new LoadSchoolWithClassesService(getSchoolWithClassRepository)

export { loadSchoolWithService }
