import { LoadStudentByIdService } from '../../../app/services/students/LoadStudentByIdService'
import { PrismaCityRepository } from '../../../infra/db/prisma/PrismaCityRepository'
import { PrismaClassRepository } from '../../../infra/db/prisma/PrismaClassRepository'
import { PrismaSchoolRepository } from '../../../infra/db/prisma/PrismaSchoolRepository'
import { PrismaStudentRepository } from '../../../infra/db/prisma/PrismaStudentRepository'

const studentRepository = new PrismaStudentRepository()
const cityRepository = new PrismaCityRepository()
const classRepository = new PrismaClassRepository()
const schoolRepository = new PrismaSchoolRepository()

const loadStudentByIdService = new LoadStudentByIdService(
  studentRepository,
  cityRepository,
  classRepository,
  schoolRepository
)

export { loadStudentByIdService }
