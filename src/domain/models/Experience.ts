import { randomUUID } from 'crypto'

export interface ExperienceParams {
  id?: string
  userId: string
  studentIds: string[]
  enterDate?: Date
}

export class Experience {
  private readonly id: string
  private readonly userId: string
  private readonly studentIds: string[]
  private readonly enterDate?: Date

  constructor (props: ExperienceParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.userId = props.userId
    this.studentIds = props.studentIds
    if (props.enterDate) {
      this.enterDate = props.enterDate
    }
  }

  getId (): string {
    return this.id
  }

  getUserId (): string {
    return this.userId
  }

  getStudentIds (): string[] {
    return this.studentIds
  }

  getEnterDate (): Date | undefined {
    return this.enterDate
  }
}
