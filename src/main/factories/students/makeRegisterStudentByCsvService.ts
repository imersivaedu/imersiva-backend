import { RegisterStudentByCsvService } from '../../../app/services/students/RegisterStudentByCsvService'
import { CsvParserAdapter } from '../../../infra/csv/CsvParserAdapter'
import { PrismaCityRepository } from '../../../infra/db/prisma/PrismaCityRepository'
import { PrismaClassRepository } from '../../../infra/db/prisma/PrismaClassRepository'
import { PrismaSchoolRepository } from '../../../infra/db/prisma/PrismaSchoolRepository'
import { PrismaStudentRepository } from '../../../infra/db/prisma/PrismaStudentRepository'

const csvParserAdapter = new CsvParserAdapter()
const schoolRepository = new PrismaSchoolRepository()
const classRepository = new PrismaClassRepository()
const cityRepository = new PrismaCityRepository()
const studentRepository = new PrismaStudentRepository()
const registerStudentByCsvService = new RegisterStudentByCsvService(
  csvParserAdapter,
  schoolRepository,
  classRepository,
  cityRepository,
  studentRepository
)

export { registerStudentByCsvService }
