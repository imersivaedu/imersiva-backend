import { LoadCitiesByUserIdService } from '../../../app/services/cities/LoadCitiesByUserIdService'
import { PrismaCityRepository } from '../../../infra/db/prisma/PrismaCityRepository'

const userRepository = new PrismaCityRepository()
const getCitiesByUserIdService = new LoadCitiesByUserIdService(userRepository)

export { getCitiesByUserIdService }
