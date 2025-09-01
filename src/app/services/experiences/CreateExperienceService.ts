import {
  CreateExperienceParams,
  CreateExperience,
  CreateExperienceResponse,
} from "../../../domain/features/experiences/CreateExperience";

import { CreateExperienceRepository } from "../../contracts/repositories/experience/CreateExperienceRepository";

export class CreateExperienceService implements CreateExperience {
  constructor(
    private readonly createExperienceRepository: CreateExperienceRepository
  ) {}

  async execute({
    userId,
    name,
    classId,
  }: CreateExperienceParams): Promise<CreateExperienceResponse | null> {
    const experience = await this.createExperienceRepository.create({
      userId,
      name,
      classId,
    });

    return experience ?? null;
  }
}
