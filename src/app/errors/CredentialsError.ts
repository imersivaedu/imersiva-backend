export class CredentialsError extends Error {
  constructor () {
    super('email or password is wrong')
    this.name = 'CredentialsError'
  }
}
