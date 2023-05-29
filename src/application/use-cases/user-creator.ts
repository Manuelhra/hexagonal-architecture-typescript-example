import { type User } from '../../domain/entities/user'
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists-exception'
import { type UserRepository } from '../../domain/repositories/user-repository'
import { type ExistUserByUsername } from '../../domain/services/exist-user-by-username'

export class UserCreatorUseCase {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly existUserByUsername: ExistUserByUsername
  ) {}

  async run (body: User): Promise<User> {
    const existUser: boolean = await this.existUserByUsername.run(body.username)

    if (existUser) throw new UserAlreadyExistsException()

    const userCreated: User = await this.userRepository.save(body)

    return userCreated
  }
}
