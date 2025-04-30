import { hash } from 'bcryptjs'

async function encryptPassword(password: string): Promise<string> {
  const hashPassword = await hash(password, 10)
  return hashPassword
}

export { encryptPassword }
