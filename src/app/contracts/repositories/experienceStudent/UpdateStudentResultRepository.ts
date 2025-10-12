export interface UpdateStudentResultRepositoryParams {
  experienceId: string;
  studentId: string;
  result: number;
}

export interface UpdateStudentResultRepositoryResponse {
  id: string;
  experienceId: string;
  studentId: string;
  result: number;
}

export interface UpdateStudentResultRepository {
  updateResult(
    params: UpdateStudentResultRepositoryParams
  ): Promise<UpdateStudentResultRepositoryResponse | null>;
}
