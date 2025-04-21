export interface CreateStudentRepositoryParams {
  id?: string
  name: string
  classId: string
}

export interface CreateManyStudentsRepository {
  createMany: (params: CreateStudentRepositoryParams[]) => Promise<void>
}
