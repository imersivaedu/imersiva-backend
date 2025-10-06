import { Router } from "express";
import { ExperienceTemplateController } from "../controllers/ExperienceTemplateController";
import { wrapAsync } from "../../shared/utils/wrapAsync";

const experienceTemplateRouter = Router();
const experienceTemplateController = new ExperienceTemplateController();

experienceTemplateRouter.get("/", wrapAsync(experienceTemplateController.list));

export { experienceTemplateRouter };
