import { CreateCityRepository, CreateCityRepositoryParams, CreateCityRepositoryResponse, GetCitiesByUserIdRepositoryResponse, LoadCitiesByUserIdRepository, LoadCityByIdRepository } from '../../../app/contracts'
import { City } from '../../../domain/models'
import { connection } from './connection'

export class PrismaCityRepository implements CreateCityRepository, LoadCityByIdRepository, LoadCitiesByUserIdRepository {
  async create ({ name, userId }: CreateCityRepositoryParams): Promise<CreateCityRepositoryResponse> {
    const cityAlreadyExists = await connection.city.findFirst({
      where: {
        AND: [
          { name, userId },
          { name }
        ]
      }
    })

    if (cityAlreadyExists) {
      return {
        id: cityAlreadyExists.id,
        name: cityAlreadyExists.name,
        userId: cityAlreadyExists.userId
      }
    }

    const createdCity = await connection.city.create({
      data: {
        name,
        userId,
      }
    })

    return createdCity
  }

  async loadById (id: string): Promise<City | null> {
    const data = await connection.city.findUnique({
      where: {
        id
      }
    })

    if (!data) return null

    return new City({
      id: data.id,
      name: data.name,
      userId: data.userId
    })
  }

  async loadByUserId (userId: string): Promise<GetCitiesByUserIdRepositoryResponse[]> {
    const data = await connection.city.findMany({
      where: {
        userId
      }
    })

    return data.map(city => ({
      id: city.id,
      name: city.name,
      userId: city.userId
    }))
  }
}
