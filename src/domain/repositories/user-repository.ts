import { type User } from 'domain/entities/user'

export interface UserRepository {
  getUsers: () => Promise<User[]>
  save: () => Promise<User>
  getByUsername: (username: string) => Promise<User | null>
  update: (user: User) => Promise<User>
  delete: (user: User) => Promise<void>
  getUserById: (id: string) => Promise<User | null>
}
