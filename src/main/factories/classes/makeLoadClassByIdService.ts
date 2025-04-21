import { LoadClassById } from '../../../app/services/classes/LoadClassByIdService'
import { PrismaClassRepository } from '../../../infra/db/prisma/PrismaClassRepository'

const classRepository = new PrismaClassRepository()
const getClassService = new LoadClassById(classRepository)

export { getClassService }
