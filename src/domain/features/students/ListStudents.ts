export interface ListStudentsResponse {
  student: {
    id: string
    name: string
    result?: {
      id: string
    }
  }
}

export interface ListStudents {
  execute: (classId: string) => Promise<ListStudentsResponse[]>
}
