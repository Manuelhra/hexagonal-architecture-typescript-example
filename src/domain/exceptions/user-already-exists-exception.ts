export class UserAlreadyExistsException extends Error {
  constructor () {
    super('User already exists.')
  }
}

export class UserNotFoundException extends Error {
  constructor (userId: string) {
    super(`User not found ${userId}`)
  }
}
