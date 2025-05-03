import { CreateExperienceRepository, CreateExperienceRepositoryParams, CreateExperienceRepositoryResponse, EnterExperienceRepository, EnterExperienceRepositoryParams, EnterExperienceRepositoryResponse } from '../../../app/contracts'
import { generateRandomPIN } from '../../../shared/helpers/generateRandomPIN'
import { connection } from './connection'

export class PrismaExperienceRepository implements CreateExperienceRepository, EnterExperienceRepository {
  async create ({ userId, studentIds }: CreateExperienceRepositoryParams): Promise<CreateExperienceRepositoryResponse | null> {
    const userAlreadyExists = await connection.user.findFirst({ where: { id: userId } })

    if (!userAlreadyExists) return null
    const pin = generateRandomPIN();
    const experience = await connection.experience.create({
      data: {
        userId,
        students: {
          create: studentIds.map(studentId => ({
            student: { connect: { id: studentId } }
          }))
        },
        pin
      }
    })

    return {
      userId: experience.userId,
      studentIds
    }
  }
  async enter({pin, joinCode}: EnterExperienceRepositoryParams): Promise<EnterExperienceRepositoryResponse | null> {
    const experience = await connection.experience.findFirst({where: {pin: pin}});
    if (experience != null) {
      if (experience.joinCode == null) {
        await connection.experience.update({where: {id: experience.id}, data: {
          joinCode: joinCode
        }});
        return {joinCode: experience.joinCode!};
      } else {
        return {joinCode: experience.joinCode};
      }
    }
    return null;
  }
}
