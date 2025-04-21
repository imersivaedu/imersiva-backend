export class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized action')
    super.name = 'UnauthorizedError'
  }
}
