import { Request, Response } from "express";
import { listExperienceTemplatesService } from "../factories/experienceTemplates/makeListExperienceTemplatesService";

export class ExperienceTemplateController {
  async list(req: Request, res: Response): Promise<Response> {
    const experienceTemplates = await listExperienceTemplatesService.execute();

    return res.json(experienceTemplates);
  }
}
