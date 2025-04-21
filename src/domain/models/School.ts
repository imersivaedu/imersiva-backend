import { randomUUID } from 'crypto'

export interface SchoolParams {
  id?: string
  name: string
  cityId: string
}

export class School {
  private readonly id: string
  private readonly name: string
  private readonly cityId: string

  constructor (props: SchoolParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.name = props.name
    this.cityId = props.cityId
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getCityId (): string {
    return this.cityId
  }
}
