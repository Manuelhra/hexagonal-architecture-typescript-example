import { UserCreatorUseCase } from '../../application/use-cases/user-creator'
import { UserGetterUseCase } from '../../application/use-cases/user-getter'
import { UserUpdaterUserCase } from '../../application/use-cases/user-updater'
import { ExistUserByUsername } from '../../domain/services/exist-user-by-username'
import { UserGetterById } from '../../domain/services/user-getter-by-id'
import { InMemoryUserRepository } from '../../infrastructure/implementations/in-memory/in-memory-user-repository'

export const inMemoryUserRepository = new InMemoryUserRepository()
export const userGetterById = new UserGetterById(inMemoryUserRepository)
export const existUserByUsername = new ExistUserByUsername(inMemoryUserRepository)
export const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepository, existUserByUsername)
export const userGetterUserCase = new UserGetterUseCase(inMemoryUserRepository)
export const userUpdaterUserCase = new UserUpdaterUserCase(inMemoryUserRepository, userGetterById)
