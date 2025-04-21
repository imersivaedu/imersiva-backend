import { randomUUID } from 'crypto'

export interface CityParams {
  id?: string
  name: string
  userId: string
}

export class City {
  private readonly id: string
  private readonly name: string
  private readonly userId: string

  constructor (props: CityParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.name = props.name
    this.userId = props.userId
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getUserId (): string {
    return this.userId
  }
}
