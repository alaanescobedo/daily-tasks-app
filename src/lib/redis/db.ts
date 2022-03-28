import client, { connect, disconnect } from '@lib/redis/client'
import type { Task } from '@task/taskInterface'
import taskSchema from '@task/taskModel'

export const createTask = async (data: Task): Promise<Task> => {
  await connect()
  const repository = client.fetchRepository(taskSchema)
  const task = repository.createAndSave({ ...data })
  await disconnect()
  return await task
}
export const searchTasks = async (): Promise<Task[]> => {
  await connect()
  const repository = client.fetchRepository(taskSchema)
  const tasks = await repository.search().return.all()
  await disconnect()
  return tasks
}
export const createIndex = async (): Promise<void> => {
  await connect()
  const repository = client.fetchRepository(taskSchema)
  await repository.createIndex()
  await disconnect()
}
export const deleteTaskDB = async (id: string): Promise<{ status: number, message: string }> => {
  await connect()
  const repository = client.fetchRepository(taskSchema)

  const tasks = await repository.fetch(id)
  const isValidId = Object.keys(tasks.entityData).length > 0
  if (!isValidId) {
    await disconnect()
    return { status: 400, message: 'Wrong id' }
  }

  await repository.remove(id)

  await disconnect()

  return { status: 200, message: 'Task deleted' }
}

export const flushDB = async (): Promise<{ status: number, message: string }> => {
  await connect()
  await client.execute(['FLUSHDB'])
  await disconnect()

  return { status: 200, message: 'DB flushed' }
}

export const searchTasksById = async (id: string): Promise<Task> => {
  await connect()

  const repository = client.fetchRepository(taskSchema)
  const task = await repository.fetch(id)
  await disconnect()

  return task
}
