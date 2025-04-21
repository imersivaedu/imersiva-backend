import { Request, Response } from 'express'
import { InvalidArgumentError } from '../../domain/errors/InvalidArgumentError'
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError'
import { excludeStudentById } from '../factories/students/makeExcludeStudentByIdService'
import { listStudentsService } from '../factories/students/makeListStudentsService'
import { loadStudentByIdService } from '../factories/students/makeLoadStudentByIdService'
import { registerStudentByCsvService } from '../factories/students/makeRegisterStudentByCsvService'

export interface reqInterface {
  name: string
  schoolName: string
  cityName: string
  grade: number
  students: Array<
  {
    name: string
  }
  >
}
export class StudentController {
  async create (req: Request, res: Response): Promise<any> {
    if (!req.file) return res.status(400).send('csv is required')
    const { userid } = req.headers

    try {
      if (!userid) throw new UnauthorizedError()

      await registerStudentByCsvService.execute({
        csv: {
          fileName: req.file.originalname,
          path: req.file.path
        },
        userId: userid as string
      })

      return res.send()
    } catch (error: any) {
      return res.status(400).send(error.message)
    }
  }
  
  async list (req: Request, res: Response): Promise<Response> {
    const classId = req.params.classId

    const students = await listStudentsService.execute(classId)

    return res.json(students)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    if (!id) throw new InvalidArgumentError('missing param error')

    await excludeStudentById.execute(id)

    return res.status(204).send()
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    const testId = req.params.testId
    const student = await loadStudentByIdService.execute(id, testId)

    return res.json(student)
  }
}
