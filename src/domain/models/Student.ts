import { randomUUID } from 'crypto'

export interface StudentParams {
  id?: string
  name: string
  classId: string
  schoolName: string
  className: string
}

export class Student {
  private readonly id: string
  private readonly name: string
  private readonly classId: string
  private readonly schoolName: string
  private readonly className: string

  constructor (props: StudentParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.name = props.name
    this.classId = props.classId
    this.schoolName = props.schoolName
    this.className = props.className
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getClassId (): string {
    return this.classId
  }

  getClassName (): string {
    return this.className
  }

  getSchoolName (): string {
    return this.schoolName
  }
}
