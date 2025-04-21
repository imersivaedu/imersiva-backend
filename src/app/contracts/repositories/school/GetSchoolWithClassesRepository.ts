export interface GetSchoolWithClassesRepositoryResponse {
  id: string
  name: string
  cityId: string
  Class: Array<{
    id: string
    name: string
    grade: number
  }>
}

export interface GetSchoolWithClassesRepository {
  listWithClasses: (id: string) => Promise<GetSchoolWithClassesRepositoryResponse>
}
