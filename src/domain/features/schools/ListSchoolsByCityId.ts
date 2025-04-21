export interface ListSchoolByCityIdResponse {
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
export interface ListSchoolByCityId {
  execute: (cityId: string) => Promise<ListSchoolByCityIdResponse[] >
}
