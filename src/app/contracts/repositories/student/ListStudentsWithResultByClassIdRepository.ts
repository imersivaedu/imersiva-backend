export interface ListStudentsWithResultByClassIdRepositoryResponse {
  student: {
    id: string
    name: string
    result?: {
      id: string
      levelResult: string
    }
  }
}

export interface ListStudentsWithResultByClassIdRepository {
  listWithResultByClassId: (classId: string) => Promise<ListStudentsWithResultByClassIdRepositoryResponse[]>
}
