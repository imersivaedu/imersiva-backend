import { User } from '../../models/User'

export interface LoadUserById {
  execute: (id: string) => Promise<User | null>
}
