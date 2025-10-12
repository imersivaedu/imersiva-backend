export interface UpdateStudentResultParams {
  experienceId: string;
  studentId: string;
  result: number;
}

export interface UpdateStudentResultResponse {
  studentId: string;
  result: number;
}

export interface UpdateStudentResult {
  execute(
    params: UpdateStudentResultParams
  ): Promise<UpdateStudentResultResponse | null>;
}
