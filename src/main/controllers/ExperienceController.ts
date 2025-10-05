import { Request, Response } from "express";
import Joi from "joi";
import { RequiredFieldsIsNotProvided } from "../../shared/errors/RequiredFieldsIsNotProvided";
import { createExperienceService } from "../factories/experiences/makeCreateExperienceService";
import { enterExperienceService } from "../factories/experiences/makeEnterExperienceService";
import { getExperienceService } from "../factories/experiences/makeGetExperienceService";
import { updateExperience } from "../factories/experiences/makeUpdateExperience";

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
    const userId = (req as any).userId;
    const { classId, templateId } = req.body;

    const schema = Joi.object({
      classId: Joi.string().required(),
      templateId: Joi.string().required(),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      throw new RequiredFieldsIsNotProvided(validation.error.message);
    }

    const experience = await createExperienceService.execute({
      userId,
      classId,
      templateId
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

  async updateStatus(req: Request, res: Response): Promise<Response> {
    try {
      const schema = Joi.object({
        experienceId: Joi.string().required(),
        status: Joi.string().valid("BEGINNING", "ONGOING", "ENDED").required(),
      });

      const { error, value } = schema.validate(req.body);

      if (error) {
        throw new RequiredFieldsIsNotProvided(error.message);
      }

      const { experienceId, status } = value;

      const experience = await updateExperience.execute({ experienceId, status });

      return res.status(200).json({
        message: `Experience status updated to ${status}`,
        experience,
      });
    } catch (error: any) {
      if (error instanceof RequiredFieldsIsNotProvided) {
        return res.status(400).json({ message: error.message });
      }

      if (error.message === "Experience not found") {
        return res.status(404).json({ message: error.message });
      }

      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
