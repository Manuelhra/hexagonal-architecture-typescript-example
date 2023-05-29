import { UserCreatorUseCase } from '../../application/use-cases/user-creator'
import { ExistUserByUsername } from '../../domain/services/exist-user-by-username'
import { InMemoryUserRepository } from '../../infrastructure/implementations/in-memory/in-memory-user-repository'

export const inMemoryUserRepository = new InMemoryUserRepository()
export const existUserByUsername = new ExistUserByUsername(inMemoryUserRepository)
export const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepository, existUserByUsername)
