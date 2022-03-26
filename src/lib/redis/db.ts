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

export const createTask = async (data: ITask) => {
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
    id
  }

  return taskCreated
}
export const searchTasks = async () => {
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