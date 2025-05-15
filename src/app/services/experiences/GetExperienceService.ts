// app/services/experiences/GetExperienceService.ts

import {
  GetExperienceParams,
  GetExperience,
  GetExperienceResponse
} from '../../../domain/features/experiences/GetExperience'

import { GetExperienceRepository } from '../../contracts/repositories/experience/GetExperienceRepository'

export class GetExperienceService implements GetExperience {
  constructor(
    private readonly GetExperienceRepository: GetExperienceRepository
  ) {}

  async execute({ pin }: GetExperienceParams): Promise<GetExperienceResponse | null> {
    const experience = await this.GetExperienceRepository.get({
      pin
    });
    return experience
  }
}
