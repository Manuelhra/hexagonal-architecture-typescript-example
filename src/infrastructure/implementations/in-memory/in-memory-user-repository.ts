import { User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/user-repository'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async getUsers (): Promise<User[]> {
    return this.users
  }

  async save (user: User): Promise<User> {
    this.users.push(user)

    return new User(user.id, user.name, user.username, user.age)
  }

  async getByUsername (username: string): Promise<User | null> {
    const idx: number = this.users.findIndex((user) => user.username === username)

    if (idx === -1) return null

    const { id, age, name } = this.users[idx]
    return new User(id, name, username, age)
  }

  async update (user: User): Promise<User> {
    const newList: User[] = this.users.filter((e) => e.id !== user.id)
    newList.push(user)
    this.users = newList

    return new User(user.id, user.name, user.username, user.age)
  }

  async delete (user: User): Promise<void> {
    const newList: User[] = this.users.filter((e) => e.id !== user.id)
    this.users = newList
  }

  async getUserById (id: string): Promise<User | null> {
    const idx: number = this.users.findIndex((user) => user.id === id)

    if (idx === -1) return null

    const { username, age, name } = this.users[idx]
    return new User(id, name, username, age)
  }
}
