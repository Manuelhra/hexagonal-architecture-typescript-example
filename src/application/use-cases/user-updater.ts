import { UserNotFoundException } from '../../domain/exceptions/user-not-found-exception'
import { type UserRepository } from '../../domain/repositories/user-repository'
import { type UserGetterById } from '../../domain/services/user-getter-by-id'
import { type User } from '../../domain/entities/user'
import { type UpdateUserDTO } from '../dtos/update-user-dto'

export class UserUpdaterUserCase {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly userGetterById: UserGetterById
  ) {}

  async run (data: UpdateUserDTO): Promise<User> {
    const userFound: User | null = await this.userGetterById.run(data.id)

    if (userFound === null) throw new UserNotFoundException(data.id)

    const dataToUpdate: User = {
      id: data.id,
      name: data.name ?? userFound.name,
      username: data.username ?? userFound.username,
      age: data.age ?? userFound.age
    }

    const userUpdated: User = await this.userRepository.update(dataToUpdate)

    return userUpdated
  }
}
