import { Request, Response } from "express";
import Joi from "joi";
import { RequiredFieldsIsNotProvided } from "../../shared/errors/RequiredFieldsIsNotProvided";
import { createExperienceService } from "../factories/experiences/makeCreateExperienceService";
import { enterExperienceService } from "../factories/experiences/makeEnterExperienceService";
import { getExperienceService } from "../factories/experiences/makeGetExperienceService";

export interface reqInterface {
  name: string;
  schoolName: string;
  cityName: string;
  grade: number;
  students: Array<{
    name: string;
  }>;
}

export class ExperienceController {
  async create(req: Request, res: Response): Promise<any> {
    console.log("asdasdasdasd");
    const userId = (req as any).userId;
    const { name, classId } = req.body;

    const schema = Joi.object({
      classId: Joi.string().required(),
      name: Joi.string().required(),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      throw new RequiredFieldsIsNotProvided(validation.error.message);
    }

    const experience = await createExperienceService.execute({
      userId,
      name,
      classId,
    });

    return res.json(experience);
  }

  async enter(req: Request, res: Response): Promise<Response> {
    const { pin, joinCode, studentId } = req.body;
    const code = await enterExperienceService.execute({
      pin,
      joinCode,
      studentId,
    });
    return res.json(code);
  }

  async get(req: Request, res: Response): Promise<Response> {
    const pin = req.query.pin as string;
    const experience = await getExperienceService.execute({ pin });
    return res.json(experience);
  }
}
