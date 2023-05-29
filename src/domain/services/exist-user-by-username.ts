import { type User } from '../../domain/entities/user'
import { type UserRepository } from '../../domain/repositories/user-repository'

export class ExistUserByUsername {
  constructor (private readonly userRepository: UserRepository) {}

  async run (username: string): Promise<boolean> {
    const user: User | null = await this.userRepository.getByUsername(username)

    if (user !== null) return true

    return false
  }
}
