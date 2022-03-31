import userSchema from '@user/userModel'
import client, { connect, disconnect } from '@lib/redis/client'
import type { NewUserClientData, User, IUserEntity } from '@user/userInterface'

export const createIndex = async (): Promise<void> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  await usersRepository.createIndex()
  await disconnect()
}

export const createUser = async (data: NewUserClientData): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const newUser: User = {
    ...data,
    active: true,
    createdAt: new Date().toISOString(),
    tasks: []
  }

  const user = usersRepository.createAndSave({ ...newUser })
  await disconnect()
  return await user
}
export const searchUsers = async (): Promise<User[]> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)
  const users = await usersRepository.search().where('active').equalTo(true).returnAll()
  await disconnect()
  return users
}
