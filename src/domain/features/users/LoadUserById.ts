import { User } from '../../models/User'

export interface LoadUserById {
  execute: (id: string) => Promise<getUserResponse | null>
}

export interface getUserResponse {
  id: string
  name: string
  email: string
}