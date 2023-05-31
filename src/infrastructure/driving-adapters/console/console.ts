import { type CreateUserDTO } from '../../../application/dtos/create-user-dto'
import { type UpdateUserDTO } from '../../../application/dtos/update-user-dto'
import { type User } from '../../../domain/entities/user'
import { UserAlreadyExistsException } from '../../../domain/exceptions/user-already-exists-exception'
import { userCreatorUseCase, userDeleterUseCase, userGetterUserCase, userUpdaterUserCase } from '../../../infrastructure/dependencies'

const bootstrap = async (): Promise<void> => {
  const userToCreate: CreateUserDTO = {
    id: '1',
    name: 'Manuel',
    username: 'manuelhra',
    age: 24
  }

  try {
    const userCreated: User = await userCreatorUseCase.run(userToCreate)
    console.log(`User ${userCreated.username} created.`)

    const users: User[] = await userGetterUserCase.run()
    console.log('List of user', users)

    const dataToUpdate: UpdateUserDTO = {
      id: '1',
      username: 'mrdev'
    }

    const userUpdated: User = await userUpdaterUserCase.run(dataToUpdate)
    console.log('User updated', userUpdated)

    const newUsers: User[] = await userGetterUserCase.run()
    console.log('List of user', newUsers)

    await userDeleterUseCase.run('1')

    const newListUser: User[] = await userGetterUserCase.run()
    console.log('User list', newListUser)
  } catch (error) {
    console.log(error)

    if (error instanceof UserAlreadyExistsException) {
      console.log(error.message)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
