// import { hash } from 'bcrypt'

async function encryptPassword (password: string): Promise<string> {
  const hashPassword = '123123'
  // const hashPassword = await hash(password, 10)

  return hashPassword
}

export { encryptPassword }
