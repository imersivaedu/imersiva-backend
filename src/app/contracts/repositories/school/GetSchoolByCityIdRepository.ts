export interface GetSchoolByCityIdRepositoryResponse {
  school: {
    id: string
    name: string
    classes: Array<{
      id: string
      name: string
      grade: number
    }>
  }
}
export interface GetSchoolByCityIdRepository {
  getByCityId: (cityId: string) => Promise<GetSchoolByCityIdRepositoryResponse[]>
}
