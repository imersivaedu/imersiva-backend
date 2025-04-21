export interface ExcludeStudentById {
  execute: (id: string) => Promise<void>
}
