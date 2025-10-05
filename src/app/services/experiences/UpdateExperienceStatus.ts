import {
  UpdateExperienceStatusParams,
  UpdateExperienceStatus,
  UpdateExperienceStatusResponse
} from '../../../domain/features/experiences/UpdateExperienceStatus'
import { UpdateExperienceStatusRepository } from '../../contracts/repositories/experience/UpdateExperienceStatusRepository';
import { NotFoundError } from '../../errors/NotFoundError';


export class UpdateExperienceStatusService implements UpdateExperienceStatus {
  constructor(
    private readonly UpdateExperienceStatusRepository: UpdateExperienceStatusRepository
  ) {}

  async execute({ experienceId, status }: UpdateExperienceStatusParams): Promise<UpdateExperienceStatusResponse | null> {
    const experience = await this.UpdateExperienceStatusRepository.update({
      experienceId,
      status
    });

    if (!experience) {
      throw new NotFoundError('Experience')
    }
    return experience
  }
}