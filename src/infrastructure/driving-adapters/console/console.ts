import { type User } from '../../../domain/entities/user'
import { UserAlreadyExistsException } from '../../../domain/exceptions/user-already-exists-exception'
import { userCreatorUseCase, userGetterUserCase } from '../../../infrastructure/dependencies'

const bootstrap = async (): Promise<void> => {
  const userToCreate: User = {
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
  } catch (error) {
    console.log(error)

    if (error instanceof UserAlreadyExistsException) {
      console.log(error.message)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
