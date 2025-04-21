export interface ExcludeStudentByIdRepository {
  delete: (id: string) => Promise<void>
}
