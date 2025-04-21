import { RegisterStudentByCsv, RegisterStudentByCsvParams } from '../../../domain/features/students/RegisterStudentByCsv'
import { RequiredFieldsIsNotProvided } from '../../../shared/errors/RequiredFieldsIsNotProvided'
import { CreateCityRepository, CreateClassRepository, CreateSchoolRepository, CreateStudentRepository } from '../../contracts'
import { CsvReader } from '../../contracts/CsvReader'

export class RegisterStudentByCsvService implements RegisterStudentByCsv {
  constructor (
    private readonly csvReader: CsvReader,
    private readonly createSchoolRepository: CreateSchoolRepository,
    private readonly createClassRepository: CreateClassRepository,
    private readonly createCityRepository: CreateCityRepository,
    private readonly createStudentRepository: CreateStudentRepository
  ) {}

  async execute ({ csv, userId }: RegisterStudentByCsvParams): Promise<void> {
    const dataFromCsv = await this.csvReader.readFromFile(csv.path)
    let line = 0

    for (const student of dataFromCsv) {
      line += 1
      const studentField = Object.keys(student)[0]
      const fields = [studentField, 'cidade', 'nome da escola', 'nome da classe', 'serie']

      for (const field of fields) {
        const correctData = dataFromCsv.every((student: any) => student[field])
        if (!correctData) throw new RequiredFieldsIsNotProvided(field)
      }

      const gradeToNumber =Number(student.serie)
      if (isNaN(gradeToNumber)) throw new Error(`grade on line: ${line} should be just a number`)

      const createdCity = await this.createCityRepository.create({
        name: student.cidade,
        userId
      })

      const createdSchool = await this.createSchoolRepository.create({
        name: student['nome da escola'],
        cityId: createdCity.id
      })

      const createdClass = await this.createClassRepository.create({
        name: student['nome da classe'],
        grade: gradeToNumber,
        schoolId: createdSchool.id
      })

      await this.createStudentRepository.create({
        name: student[fields[0]],
        classId: createdClass.id
      })
    }
  }
}
