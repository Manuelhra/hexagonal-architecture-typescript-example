import { type UserRepository } from 'domain/repositories/user-repository'

export class UserCreatorUseCase {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  run (): void {
    console.log('Run')
  }
}
