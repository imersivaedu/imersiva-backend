import { AuthUserService } from '../../../app/services/users/AuthUserService'
import { PrismaUserRepository } from '../../../infra/db/prisma/PrismaUserRepository'

const AuthUserRepository = new PrismaUserRepository()
const authUserService = new AuthUserService(AuthUserRepository)

export { authUserService }
