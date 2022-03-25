import { Client, Entity, Schema } from 'redis-om'

class Task extends Entity { }
const taskSchema = new Schema(Task, {
  title: { type: 'string' },
  status: { type: 'string' },
  scheduledFor: { type: 'string' }
})

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

export const createTask = async (data: any) => {
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