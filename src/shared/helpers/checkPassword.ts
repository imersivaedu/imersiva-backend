import { compare } from 'bcrypt' 

async function checkPassword(password: string, hash: string): Promise<boolean> {
  try {
    const passwordIsValid = await compare(password, hash)
    return passwordIsValid
  } catch (err) {
    console.error('Erro ao verificar senha:', err)
    return false
  }
}

export { checkPassword }
