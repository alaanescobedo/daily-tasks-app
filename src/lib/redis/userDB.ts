import userSchema from '@user/userModel'
import client, { connect, disconnect } from '@lib/redis/client'
import type { User, IUserEntity, UserUpdateData } from '@user/userInterface'
import type { SignupUserClientData } from '@auth/auth.interfaces'

export const createIndex = async (): Promise<void> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  await usersRepository.createIndex()
  await disconnect()
}

// CRUD Operations
export const createUser = async (data: SignupUserClientData): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const newUser: User = {
    ...data,
    active: true,
    verified: false,
    createdAt: new Date().toISOString(),
    tasks: [],
    updatedAt: null
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
export const searchUserById = async (id: string): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const user = await usersRepository.fetch(id)
  await disconnect()
  return user
}
export const searchUserToLogin = async (email: string): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)
  const user = await usersRepository.search().where('email').equalTo(email).returnFirst()
  await disconnect()
  return user
}
export const updateUserDB = async (id: string, data: UserUpdateData): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)
  const user = await usersRepository.fetch(id)
  user.email = data.email
  user.username = data.username

  await usersRepository.save(user)
  await disconnect()
  return user
}

// Specific Operations about Update
export const updateUserStatusAccount = async (id: string, status: boolean): Promise<{ status: number, message: string }> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const user = await usersRepository.fetch(id)
  user.active = status
  await usersRepository.save(user)
  await disconnect()
  return { status: 200, message: 'User status updated' }
}
export const updateUserTasks = async (userId: string, taskId: string): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const user = await usersRepository.fetch(userId)
  user.tasks = [taskId]

  await usersRepository.save(user)
  await disconnect()
  return user
}

// Forgot Password
export const findUserByEmail = async (email: string): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)
  const user = await usersRepository.search().where('email').equalTo(email).returnFirst()
  await disconnect()
  return user
}

// Reset Password
export const updatePassword = async (id: string, newPassword: string): Promise<IUserEntity> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)
  const user = await usersRepository.fetch(id)
  user.password = newPassword
  user.updatedAt = new Date().toISOString()
  await usersRepository.save(user)
  await disconnect()
  return user
}

// Verify Account
export const verifyAccount = async (id: string): Promise<boolean> => {
  await connect()
  const usersRepository = client.fetchRepository(userSchema)

  const user = await usersRepository.fetch(id)
  user.verified = true
  user.updatedAt = new Date().toISOString()
  await usersRepository.save(user)
  await disconnect()
  return user.verified
}
