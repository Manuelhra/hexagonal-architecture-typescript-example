import { type User } from '../entities/user'
import { type UserRepository } from '../repositories/user-repository'

export class UserGetterById {
  constructor (private readonly userRepository: UserRepository) {}
  async run (userId: string): Promise<User | null> {
    const userFound: User | null = await this.userRepository.getUserById(userId)

    return userFound
  }
}
