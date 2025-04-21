import { LoadStudentById, LoadStudentByIdResponse } from '../../../domain/features/students/LoadStudentById'
import { GetClassByIdRepository, GetSchoolByIdRepository, GetStudentByIdRepository, LoadCityByIdRepository } from '../../contracts'
import { NotFoundError } from '../../errors/NotFoundError'

export class LoadStudentByIdService implements LoadStudentById {
  constructor (
    private readonly getStudentByIdRepository: GetStudentByIdRepository,
    private readonly loadCityByIdRepository: LoadCityByIdRepository,
    private readonly getClassByIdRepository: GetClassByIdRepository,
    private readonly getSchoolByIdRepository: GetSchoolByIdRepository,
  ) {}

  async execute (id: string, testId?: string): Promise<LoadStudentByIdResponse> {
    const student = await this.getStudentByIdRepository.getById(id)
    if (!student) throw new NotFoundError('Student')
    const classInfos = await this.getClassByIdRepository.getById(student.getClassId())
    const school = await this.getSchoolByIdRepository.getById(classInfos?.getSchoolId() ?? '')
    const city = await this.loadCityByIdRepository.loadById(school?.getCityId() ?? '')

    return {
      studentData: student,
      studentClass: classInfos,
      studentSchool: school,
      cityInformation: city,
    }
  }
}
