export interface CreateUserParams {
  name: string
  email: string
  password: string
}

export interface CreateUserResponse {
  id: string
  name: string
  email: string
}

export interface CreateUser {
  execute: ({ name, email, password }: CreateUserParams) => Promise<CreateUserResponse>
}
