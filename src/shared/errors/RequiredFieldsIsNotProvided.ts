export class RequiredFieldsIsNotProvided extends Error {
  constructor (field: string) {
    super(`required field: ${field} is not provided`)
    super.name = 'RequiredFieldsIsNotProvided'
  }
}
