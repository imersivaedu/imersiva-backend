export class UnauthorizedError extends Error {
  constructor (field: string) {
    super(`Unauthorized action: ${field}`)
    super.name = 'UnauthorizedError'
  }
}
