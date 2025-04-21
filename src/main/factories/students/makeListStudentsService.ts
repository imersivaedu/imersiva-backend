import { ListStudentsService } from '../../../app/services/students/ListStudentsService'
import { PrismaStudentRepository } from '../../../infra/db/prisma/PrismaStudentRepository'

const studentsRepository = new PrismaStudentRepository()
const listStudentsService = new ListStudentsService(studentsRepository)

export { listStudentsService }
