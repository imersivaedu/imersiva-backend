import { Request, Response } from 'express'
import { getClassService } from '../factories/classes/makeLoadClassByIdService'

export class ClassController {
  async getById (req: Request, res: Response): Promise<Response> {
    const classId = req.params.classId

    const classOfStudent = await getClassService.getById(classId)

    return res.json(classOfStudent)
  }
}
