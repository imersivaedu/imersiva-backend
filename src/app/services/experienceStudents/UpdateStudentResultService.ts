import { UpdateStudentResult } from "../../../domain/features/experienceStudents/UpdateStudentResult";
import { UpdateStudentResultRepository } from "../../contracts/repositories/experienceStudent/UpdateStudentResultRepository";

export class UpdateStudentResultService implements UpdateStudentResult {
  constructor(
    private readonly repository: UpdateStudentResultRepository
  ) {}

  async execute({ experienceId, studentId, result }) {
    return await this.repository.updateResult({ experienceId, studentId, result });
  }
}
