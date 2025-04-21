import { Class } from '../../models/Class'

export interface LoadClassById {
  execute: (id: string) => Promise<Class | null>
}
