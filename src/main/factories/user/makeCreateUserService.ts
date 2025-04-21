import { CreateUserService } from '../../../app/services/users/CreateUserService'
import { PrismaUserRepository } from '../../../infra/db/prisma/PrismaUserRepository'

const userRepository = new PrismaUserRepository()
const createUserService = new CreateUserService(userRepository)

export { createUserService }
