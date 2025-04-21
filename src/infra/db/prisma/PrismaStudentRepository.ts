import { CreateStudentRepository, CreateStudentRepositoryParams, CreateStudentRepositoryResponse, ExcludeStudentByIdRepository, GetStudentByIdRepository, ListStudentsRepository, ListStudentsWithResultByClassIdRepository, ListStudentsWithResultByClassIdRepositoryResponse } from '../../../app/contracts'
import { CreateManyStudentsRepository } from '../../../app/contracts/repositories/student/CreateManyStudentsRepository'
import { NotFoundError } from '../../../app/errors/NotFoundError'
import { Student } from '../../../domain/models'
import { connection } from './connection'

export class PrismaStudentRepository implements CreateStudentRepository, CreateManyStudentsRepository, ListStudentsRepository, GetStudentByIdRepository, ListStudentsWithResultByClassIdRepository, ExcludeStudentByIdRepository {
  async create ({ name, classId }: CreateStudentRepositoryParams): Promise<CreateStudentRepositoryResponse> {
    const studentAlreadyExists = await connection.student.findFirst({ where: { AND: [{ name, classId }, { classId }] } })
    if (studentAlreadyExists) return studentAlreadyExists
    const newStudent = await connection.student.create({
      data: {
        name,
        Class: { connect: { id: classId } }
      }
    })

    return newStudent
  }

  async createMany (students: CreateStudentRepositoryParams[]): Promise<void> {
    const existingStudents = await connection.student.findMany({
      where: {
        OR: students.map(student => ({ name: student.name, classId: student.classId }))
      }
    })

    const newStudents = students.filter(student =>
      !existingStudents.some(existingStudent => existingStudent.id === student.id)
    )

    await connection.student.createMany({
      data: newStudents.map(student => ({
        name: student.name,
        classId: student.classId,
      }))
    })
  }

  async list (): Promise<Student[]> {
    const students = await connection.student.findMany({ include: { Class: { include: { School: true } } } })

    return students.map(student => {
      return new Student({
        id: student.id,
        name: student.name,
        classId: student.classId,
        schoolName: student.Class.School.name,
        className: student.Class.name
      })
    })
  }

  async delete (id: string): Promise<void> {
    await connection.student.delete({
      where: {
        id
      }
    })
  }

  async getById (id: string): Promise<Student | null> {
    const students = await connection.student.findMany({
      where: {
        OR: [
          { id }
        ]
      },
      include: {
        Class: {
          include: {
            School: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    if (!students) return null

    const lastStudent = students[0]
    return new Student({
      id: lastStudent.id,
      name: lastStudent.name,
      classId: lastStudent.classId,
      schoolName: lastStudent.Class.School.name,
      className: lastStudent.Class.name
    })
  }

  async listWithResultByClassId (classId: string): Promise<ListStudentsWithResultByClassIdRepositoryResponse[]> {
    const findClass = await connection.class.findFirst({
      where: { OR: [{ id: classId }] }
    })

    if (!findClass) throw new NotFoundError('class')
    const data = await connection.student.findMany({
      where: { classId: findClass.id }
     })
    return data.map(student => ({
      student: {
        id: student.id,
        name: student.name,
      }
    }))
  }
}
