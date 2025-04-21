import { LoadSchoolByCityId } from '../../../app/services/schools/LoadSchoolByCityIdService'
import { PrismaSchoolRepository } from '../../../infra/db/prisma/PrismaSchoolRepository'

const listSchoolByCityIdRepository = new PrismaSchoolRepository()
const listSchoolByCityIdService = new LoadSchoolByCityId(listSchoolByCityIdRepository)

export { listSchoolByCityIdService }
