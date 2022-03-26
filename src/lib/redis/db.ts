import { Client } from 'redis-om'
import taskSchema, { ITask } from '@task/taskModel'

const client = new Client()

const connect = async (): Promise<void> => {
  if (!client.isOpen()) {
    await client.open(process.env['REDIS_URL'])
  }
}
const disconnect = async (): Promise<void> => {
  if (client.isOpen()) {
    await client.close()
  }
}

export const createTask = async (data: ITask): Promise<{
  entityId: string
  title: string
  status: string
  scheduledFor: string
}> => {
  await connect()
  const repository = client.fetchRepository(taskSchema)

  const task = repository.createEntity({
    title: data.title,
    status: data.status,
    scheduledFor: data.scheduledFor
  })

  const id = await repository.save(task)

  await disconnect()

  const taskCreated = {
    ...data,
    entityId: id
  }

  return taskCreated
}
export const searchTasks = async (): Promise<ITask[]> => {
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
