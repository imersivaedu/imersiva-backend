// app/services/experiences/EnterExperienceService.ts

import {
  EnterExperienceParams,
  EnterExperience,
  EnterExperienceResponse
} from '../../../domain/features/experiences/EnterExperience'

import { EnterExperienceRepository } from '../../contracts/repositories/experience/EnterExperienceRepository'

export class EnterExperienceService implements EnterExperience {
  constructor(
    private readonly EnterExperienceRepository: EnterExperienceRepository
  ) {}

  async execute({ pin, joinCode, studentId }: EnterExperienceParams): Promise<EnterExperienceResponse | null> {
    const code = await this.EnterExperienceRepository.enter({
      pin, joinCode, studentId
    });

    return code ?? null
  }
}
