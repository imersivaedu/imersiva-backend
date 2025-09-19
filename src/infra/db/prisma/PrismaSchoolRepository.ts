import {
  CreateSchoolRepository,
  CreateSchoolRepositoryParams,
  CreateSchoolRepositoryResponse,
  GetSchoolByCityIdRepository,
  GetSchoolByCityIdRepositoryResponse,
  GetSchoolByIdRepository,
  GetSchoolWithClassesRepository,
  GetSchoolWithClassesRepositoryResponse,
} from "../../../app/contracts";
import { NotFoundError } from "../../../app/errors/NotFoundError";
import { School } from "../../../domain/models";
import { connection } from "./connection";

export class PrismaSchoolRepository
  implements
    CreateSchoolRepository,
    GetSchoolByIdRepository,
    GetSchoolByCityIdRepository,
    GetSchoolWithClassesRepository
{
  async create({
    name,
    cityId,
    userId,
  }: CreateSchoolRepositoryParams): Promise<CreateSchoolRepositoryResponse> {
    const schoolAlreadyExists = await connection.school.findFirst({
      where: {
        AND: [{ name, cityId }, { name }],
      },
    });

    if (schoolAlreadyExists) return schoolAlreadyExists;

   const createdSchool = await connection.school.create({
    data: {
      name,
      cityId,
      userId 
    }
})

    return createdSchool;
  }

  async getById(id: string): Promise<School | null> {
    const school = await connection.school.findUnique({
      where: {
        id,
      },
    });

    if (!school) return null;

    return new School({
      id: school.id,
      name: school.name,
      cityId: school.cityId,
    });
  }

  async getByCityId(
    cityId: string
  ): Promise<GetSchoolByCityIdRepositoryResponse[]> {
    const city = await connection.city.findFirst({ where: { id: cityId } });
    if (!city) throw new NotFoundError("cityId");

    const schools = await connection.school.findMany({
      where: { cityId: city.id },
      include: {
        Class: {
          select: {
            id: true,
            name: true,
            grade: true,
          },
        },
      },
    });

    return schools.map((school) => ({
      school: {
        id: school.id,
        name: school.name,
        classes: school.Class.map(({ id, name, grade }) => ({
          id,
          name,
          grade,
        })),
      },
    }));
  }

  async listWithClasses(
    userId: string
  ): Promise<GetSchoolWithClassesRepositoryResponse> {
    const school = await connection.school.findFirst({
      where: { userId },
      include: {
        Class: {
          select: {
            id: true,
            name: true,
            grade: true,
          },
        },
      },
    });
    if (!school) throw new NotFoundError("school");

    return school;
  }
}
