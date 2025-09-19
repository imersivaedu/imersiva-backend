import { Request, Response } from 'express'
import { getCitiesByUserIdService } from '../factories/cities/makeLoadCitiesByUserId'

export class CityController {
  async getByUserId (req: Request, res: Response): Promise<Response> {
    const userid = (req as any).userId; 

    const cities = await getCitiesByUserIdService.execute(userid as string)

    return res.json(cities)
  }
}
