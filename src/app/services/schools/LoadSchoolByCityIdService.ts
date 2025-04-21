import { ListSchoolByCityId } from '../../../domain/features/schools/ListSchoolsByCityId'
import { GetSchoolByCityIdRepository, GetSchoolByCityIdRepositoryResponse } from '../../contracts'
export class LoadSchoolByCityId implements ListSchoolByCityId {
  constructor (private readonly listSchoolByCityId: GetSchoolByCityIdRepository) {}

  async execute (cityId: string): Promise<GetSchoolByCityIdRepositoryResponse[]> {
    const listSchools = await this.listSchoolByCityId.getByCityId(cityId)

    return listSchools
  }
}
