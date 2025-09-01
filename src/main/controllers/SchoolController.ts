import { Request, Response } from "express";
import { listSchoolByCityIdService } from "../factories/schools/makeLoadSchoolByCityId";
import { loadSchoolWithService } from "../factories/schools/makeLoadSchoolWithClasses";

export class SchoolController {
  async getByCityId(req: Request, res: Response): Promise<Response> {
    const cityId = req.params.cityId;
    const listSchoolByCityId = await listSchoolByCityIdService.execute(cityId);

    return res.json(listSchoolByCityId);
  }

  async getWithClassesBySchoolId(
    req: Request,
    res: Response
  ): Promise<Response> {
    const userId = (req as any).userId;
    const school = await loadSchoolWithService.execute(userId);

    return res.json(school);
  }
}
