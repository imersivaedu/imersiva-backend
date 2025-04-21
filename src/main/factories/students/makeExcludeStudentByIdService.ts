import { ExcludeStudentByIdService } from '../../../app/services/students/ExcludeStudentByIdService'
import { PrismaStudentRepository } from '../../../infra/db/prisma/PrismaStudentRepository'

const excludeStudentByIdRepository = new PrismaStudentRepository()
const excludeStudentById = new ExcludeStudentByIdService(excludeStudentByIdRepository)

export { excludeStudentById }
