import { CreateUser, CreateUserParams, CreateUserResponse } from '../../../domain/features/users/CreateUser';
import { encryptPassword } from '../../../shared/helpers/encryptPassword';
import { CreateUserRepository } from '../../contracts/repositories/user/CreateUserRepository';

export class CreateUserService implements CreateUser {
  constructor(
    private readonly createUserRepository: CreateUserRepository
  ) {}

  async execute({ name, email, password }: CreateUserParams): Promise<CreateUserResponse> {

    const passwordEncrypted = await encryptPassword(password);

    const user = await this.createUserRepository.create({
      name,
      email,
      password: passwordEncrypted,
    });

    return user;
  }
}
