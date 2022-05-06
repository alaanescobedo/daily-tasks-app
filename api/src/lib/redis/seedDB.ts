import client, { connect, disconnect } from '@lib/redis/client'
import type { Task } from '@task/taskInterface'
import type { User } from '@user/userInterface'
import type { Entity, Schema } from 'redis-om'

export const generateSeedDB = async (schema: Schema<Entity>, seeds: User[] | Task[]): Promise<void> => {
  await connect()
  const repository = client.fetchRepository(schema)
  await repository.createIndex()
  for (const item of seeds) {
    await repository.createAndSave({ ...item })
  }
  await disconnect()
}

export const flushDB = async (): Promise<{ status: number, message: string }> => {
  await connect()
  await client.execute(['FLUSHDB'])
  await disconnect()
  return { status: 200, message: 'DB flushed' }
}
