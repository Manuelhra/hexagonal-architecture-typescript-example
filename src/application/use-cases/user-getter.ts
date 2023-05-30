import { type User } from '../../domain/entities/user'
import { type UserRepository } from '../../domain/repositories/user-repository'

export class UserGetterUseCase {
  constructor (private readonly userRepository: UserRepository) { }
  async run (): Promise<User[]> {
    const userList: User[] = await this.userRepository.getUsers()

    return userList
  }
}
