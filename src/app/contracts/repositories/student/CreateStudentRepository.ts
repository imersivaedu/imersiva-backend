export interface CreateStudentRepositoryParams {
  id?: string
  name: string
  classId: string
}

export interface CreateStudentRepositoryResponse {
  id: string
  name: string
  classId: string
}
export interface CreateStudentRepository {
  create: (params: CreateStudentRepositoryParams) => Promise<CreateStudentRepositoryResponse>
}
