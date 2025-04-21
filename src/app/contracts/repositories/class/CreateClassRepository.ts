import { Grade } from '../../../../domain/valueObjects'

export interface CreateClassRepositoryParams {
  id?: string
  name: string
  grade: Grade
  schoolId: string
}
export interface CreateClassRepositoryResponse {
  id: string
  name: string
  grade: Grade
  schoolId: string
}
export interface CreateClassRepository {
  create: (params: CreateClassRepositoryParams) => Promise<CreateClassRepositoryResponse>
}
