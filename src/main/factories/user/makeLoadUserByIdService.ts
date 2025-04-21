import { LoadUserByIdService } from '../../../app/services/users/LoadUserByIdService'
import { PrismaUserRepository } from '../../../infra/db/prisma/PrismaUserRepository'

const loadUserByIdRepository = new PrismaUserRepository()
const loadUserByIdService = new LoadUserByIdService(loadUserByIdRepository)

export { loadUserByIdService }
