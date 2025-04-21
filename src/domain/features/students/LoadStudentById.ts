import { City } from '../../models/City'
import { Class } from '../../models/Class'
import { School } from '../../models/School'
import { Student } from '../../models/Student'

export interface LoadStudentByIdResponse {
  studentData: Student
  studentClass: Class | null
  studentSchool: School | null
  cityInformation: City | null
}

export interface LoadStudentById {
  execute: (id: string, testId: string) => Promise<LoadStudentByIdResponse>
}
