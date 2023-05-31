import { type User } from '../../domain/entities/user'
import { UserNotFoundException } from '../../domain/exceptions/user-not-found-exception'
import { type UserRepository } from '../../domain/repositories/user-repository'
import { type UserGetterById } from '../../domain/services/user-getter-by-id'

export class UserDeleterUseCase {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly userGetterById: UserGetterById
  ) {}

  async run (userId: string): Promise<void> {
    const userToDelete: User | null = await this.userGetterById.run(userId)

    if (userToDelete === null) throw new UserNotFoundException(userId)

    await this.userRepository.delete(userToDelete)
  }
}
