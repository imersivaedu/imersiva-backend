import { CreateClassRepository, CreateClassRepositoryParams, CreateClassRepositoryResponse } from '../../../app/contracts'
import { GetClassByIdRepository } from '../../../app/contracts/repositories/class/GetClassByIdRepository'
import { Class } from '../../../domain/models'
import { Grade } from '../../../domain/valueObjects'
import { connection } from './connection'

export class PrismaClassRepository implements CreateClassRepository, GetClassByIdRepository {
  async create ({ name, grade, schoolId }: CreateClassRepositoryParams): Promise<CreateClassRepositoryResponse> {
    console.log("classAlreadyExists",  Grade[grade])
    const classAlreadyExists = await connection.class.findFirst({ where: { AND: [{ name, schoolId, grade }, { name, grade }] }, include: { School: true } })
    if(classAlreadyExists) return classAlreadyExists
    
    const newClass = await connection.class.create({
      data: {
        name,
        grade,
        schoolId
      }
    })

    return newClass
  }

  async getById (id: string): Promise<Class | null> {
    const data = await connection.class.findUnique({
      where: {
        id
      }
    })

    if (!data) return null

    return new Class({
      id: data.id,
      name: data.name,
      grade: data.grade,
      schoolId: data.schoolId
    })
  }
}
