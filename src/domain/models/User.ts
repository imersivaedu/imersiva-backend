import { randomUUID } from 'crypto'

export interface UserParams {
  id?: string
  name: string
  email: string
  password: string
}

export class User {
  private readonly id: string
  private readonly name: string
  private readonly email: string
  private readonly password: string

  constructor (props: UserParams) {
    let id = props.id
    if (!id) id = randomUUID()

    this.id = id
    this.name = props.name
    this.email = props.email
    this.password = props.password
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getEmail (): string {
    return this.email
  }
}
