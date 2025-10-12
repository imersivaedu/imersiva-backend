import { Request, Response } from "express";
import Joi from "joi";
import { RequiredFieldsIsNotProvided } from "../../shared/errors/RequiredFieldsIsNotProvided";
import { updateStudentResultService } from "../factories/experienceStudent/makeUpdateStudentResultService";

export class ExperienceStudentController {
  async updateResult(req: Request, res: Response): Promise<Response> {
    const { experienceId, studentId, result } = req.body;

    const schema = Joi.object({
      experienceId: Joi.string().required(),
      studentId: Joi.string().required(),
      result: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) throw new RequiredFieldsIsNotProvided(error.message);

    const updated = await updateStudentResultService.execute({
      experienceId,
      studentId,
      result,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Student not found in this experience" });
    }

    return res.status(200).json({
      message: "Student result updated successfully",
      updated,
    });
  }
}
