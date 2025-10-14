import { Router } from "express";
import { ExperienceController } from "../controllers/ExperienceController";
import { wrapAsync } from "../../shared/utils/wrapAsync";
import { authMiddleware } from "../middlewares/authMiddleware";

const experienceController = new ExperienceController();
const experienceRouter = Router();

experienceRouter.post(
  "/",
  authMiddleware,
  wrapAsync(experienceController.create)
);
experienceRouter.patch("/enter", wrapAsync(experienceController.enter));
experienceRouter.get("/getOne", wrapAsync(experienceController.get));
experienceRouter.put("/update-status", wrapAsync(experienceController.updateStatus));


export { experienceRouter };
