import { CreateExperienceRepository, CreateExperienceRepositoryParams, CreateExperienceRepositoryResponse, EnterExperienceRepository, EnterExperienceRepositoryParams, EnterExperienceRepositoryResponse, GetExperienceRepository } from '../../../app/contracts'
import { GetExperienceParams, GetExperienceResponse } from '../../../domain/features/experiences/GetExperience'
import { generateRandomPIN } from '../../../shared/helpers/generateRandomPIN'
import { connection } from './connection'

export class PrismaExperienceRepository implements CreateExperienceRepository, EnterExperienceRepository, GetExperienceRepository {
  async create({ userId, classId, templateId }: CreateExperienceRepositoryParams): Promise<CreateExperienceRepositoryResponse | null> {
    const userAlreadyExists = await connection.user.findFirst({ where: { id: userId } })

    const students = await connection.student.findMany({ where: { classId } })
    const studentIds = students.map(student => student.id)

    if (!userAlreadyExists) return null
    const pin = generateRandomPIN();
    const experience = await connection.experience.create({
      data: {
        userId,
        templateId,
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
      templateId,
      pin
    }
  }
  async enter({ pin, joinCode, studentId }: EnterExperienceRepositoryParams): Promise<EnterExperienceRepositoryResponse | null> {
    const experience = await connection.experience.findFirst({ where: { pin: pin }, include: { students: true } });
    if (experience != null) {
      if (!experience.students.find((st) => st.studentId == studentId)) return null;
      if (experience.joinCode == null) {
        await connection.experience.update({
          where: { id: experience.id }, data: {
            joinCode: joinCode
          }
        });
        return { joinCode: experience.joinCode! };
      } else {
        return { joinCode: experience.joinCode };
      }
    }
    return null;
  }
  async get({ pin }: GetExperienceParams): Promise<GetExperienceResponse | null> {
    const experience = await connection.experience.findFirst({
      where: { pin: pin },
      include: {
        students: {
          include: {
            student: true
          }
        }
      }
    });

    if (experience) {
      return {
        id: experience.id,
        userId: experience.userId,
        templateId: experience.templateId,
        pin: experience.pin,
        joinCode: experience.joinCode,
        enterDate: experience.enterDate,
        students: experience.students.map(item => ({
          id: item.student.id,
          name: item.student.name,
          classId: item.student.classId,
          createdAt: item.student.createdAt
        }))
      };
    }

    return null;
  }

}
