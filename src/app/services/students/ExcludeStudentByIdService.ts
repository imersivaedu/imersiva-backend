import { ExcludeStudentById } from '../../../domain/features/students/ExcludeStudentById'
import { ExcludeStudentByIdRepository } from '../../contracts'
import { ForbiddenOperationError } from '../../errors/ForbiddenOperationError'

export class ExcludeStudentByIdService implements ExcludeStudentById {
  constructor (
    private readonly excludeStudentById: ExcludeStudentByIdRepository,
  ) {}

  async execute (id: string): Promise<void> {
    //lembrar de colocar alguma condicao para nao apagar o estudante - todo

    await this.excludeStudentById.delete(id)
  }
}
