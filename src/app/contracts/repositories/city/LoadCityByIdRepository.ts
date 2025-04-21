import { City } from '../../../../domain/models'

export interface LoadCityByIdRepository {
  loadById: (id: string) => Promise<City | null>
}
