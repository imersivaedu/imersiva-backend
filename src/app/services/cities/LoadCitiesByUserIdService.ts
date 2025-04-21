import { GetCitiesByUserIdRepositoryResponse, LoadCitiesByUserIdRepository } from '../../contracts/repositories/city/LoadCitiesByUserIdRepository'

export class LoadCitiesByUserIdService {
  constructor (private readonly loadCitiesByUserIdRepository: LoadCitiesByUserIdRepository) {}

  async execute (userId: string): Promise<GetCitiesByUserIdRepositoryResponse[] > {
    const cities = await this.loadCitiesByUserIdRepository.loadByUserId(userId)

    return cities
  }
}
