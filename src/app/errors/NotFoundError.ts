export class NotFoundError extends Error {
  constructor (data: string) {
    super(`${data} not found`)
  }
}
