export interface RegisterStudentByCsvParams {
  csv: {
    path: string
    fileName: string
  }
  userId: string
}

export interface RegisterStudentByCsv {
  execute: (params: RegisterStudentByCsvParams) => Promise<void>
}
