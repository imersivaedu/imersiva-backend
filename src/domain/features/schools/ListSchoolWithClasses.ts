export interface ListSchoolWithClassesResponse {
  id: string
  name: string
  cityId: string
  Class: Array<{
    id: string
    name: string
    grade: number
  }>
}

export interface ListSchoolWithClasses {
  execute: (id: string) => Promise<ListSchoolWithClassesResponse>
}
