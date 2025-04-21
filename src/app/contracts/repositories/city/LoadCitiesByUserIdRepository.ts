export interface GetCitiesByUserIdRepositoryResponse {
  id: string
  name: string
  userId: string
}
export interface LoadCitiesByUserIdRepository {
  loadByUserId: (userId: string) => Promise<GetCitiesByUserIdRepositoryResponse[]>
}
