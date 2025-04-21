export interface AuthUserParams {
  email: string
  password: string
}
export interface AuthUserResponse {
  token: string
  user: {
    email: string
    name: string
    id: string
  }
}

export interface AuthUser {
  execute: ({ email, password }: AuthUserParams) => Promise<AuthUserResponse>
}
