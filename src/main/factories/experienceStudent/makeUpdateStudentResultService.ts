import { UpdateStudentResultService } from "../../../app/services/experienceStudents/UpdateStudentResultService";
import { PrismaExperienceStudentRepository } from "../../../infra/db/prisma/PrismaExperienceStudentRepository";

const experienceStudentRepository = new PrismaExperienceStudentRepository();
const updateStudentResultService = new UpdateStudentResultService(
  experienceStudentRepository
);

export { updateStudentResultService };
