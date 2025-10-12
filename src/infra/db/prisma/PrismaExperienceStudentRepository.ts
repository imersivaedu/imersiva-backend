import { UpdateStudentResultRepository, UpdateStudentResultRepositoryParams, UpdateStudentResultRepositoryResponse } from "../../../app/contracts/repositories/experienceStudent/UpdateStudentResultRepository";
import { connection } from "./connection";

export class PrismaExperienceStudentRepository
  implements UpdateStudentResultRepository
{
  async updateResult({
    experienceId,
    studentId,
    result,
  }: UpdateStudentResultRepositoryParams): Promise<UpdateStudentResultRepositoryResponse | null> {
    const experienceStudent = await connection.experienceStudent.findFirst({
      where: { experienceId, studentId },
    });

    if (!experienceStudent) return null;

    const updated = await connection.experienceStudent.update({
      where: { id: experienceStudent.id },
      data: { result },
    });

    return {
      id: updated.id,
      experienceId: updated.experienceId,
      studentId: updated.studentId,
      result: updated.result!,
    };
  }
}
