import { randomUUID } from 'crypto'
import { Grade } from '../valueObjects'

export interface ClassParams {
  id?: string
  name: string
  grade: Grade
  schoolId: string
}

export class Class {
  private readonly id: string
  private readonly name: string
  private readonly grade: Grade
  private readonly schoolId: string

  constructor (props: ClassParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.name = props.name
    this.grade = props.grade
    this.schoolId = props.schoolId
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getGrade (): Grade {
    return this.grade
  }

  getSchoolId (): string {
    return this.schoolId
  }
}
