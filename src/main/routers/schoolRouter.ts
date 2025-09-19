import { Router } from "express";
import { SchoolController } from "../controllers/SchoolController";
import { wrapAsync } from "../../shared/utils/wrapAsync";
import { authMiddleware } from "../middlewares/authMiddleware";

const schoolController = new SchoolController();
const schoolRouter = Router();

schoolRouter.get(
  "/withClasses",
  authMiddleware,
  wrapAsync(schoolController.getWithClassesBySchoolId)
);
schoolRouter.get("/:cityId", wrapAsync(schoolController.getByCityId));

export { schoolRouter };
