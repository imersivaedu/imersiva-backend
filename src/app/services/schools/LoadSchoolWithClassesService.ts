import { ListSchoolWithClasses, ListSchoolWithClassesResponse } from '../../../domain/features/schools/ListSchoolWithClasses'
import { GetSchoolWithClassesRepository } from '../../contracts/repositories/school/GetSchoolWithClassesRepository'

export class LoadSchoolWithClassesService implements ListSchoolWithClasses {
  constructor (
    private readonly getSchoolWithClassesRepository: GetSchoolWithClassesRepository
  ) {}

  async execute (id: string): Promise<ListSchoolWithClassesResponse> {
    const response = await this.getSchoolWithClassesRepository.listWithClasses(id)

    return response
  }
}
