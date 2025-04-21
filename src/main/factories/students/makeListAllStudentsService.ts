import { ListAllStudentsService } from '../../../app/services/students/ListAllStudentsService'
import { PrismaStudentRepository } from '../../../infra/db/prisma/PrismaStudentRepository'

const studentRepository = new PrismaStudentRepository()
const listAllStudentsService = new ListAllStudentsService(studentRepository)

export { listAllStudentsService }
