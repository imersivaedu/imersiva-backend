import { Router } from "express";
import { ExperienceStudentController } from "../controllers/ExperienceStudentController";
import { wrapAsync } from "../../shared/utils/wrapAsync";
import { authMiddleware } from "../middlewares/authMiddleware";

const experienceStudentController = new ExperienceStudentController();
const experienceStudentRouter = Router();

experienceStudentRouter.patch(
  "/update-result",
  authMiddleware,
  wrapAsync(experienceStudentController.updateResult)
);

export { experienceStudentRouter };
