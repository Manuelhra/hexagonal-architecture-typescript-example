import { type User } from 'domain/entities/user'
import { type UserRepository } from 'domain/repositories/user-repository'
import { type ExistUserByUsername } from 'domain/services/exist-user-by-username'

export class UserCreatorUseCase {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly existUserByUsername: ExistUserByUsername
  ) {}

  run (body: User): void {
    const existUser: boolean = this.existUserByUsername.run(body.username)
  }
}
