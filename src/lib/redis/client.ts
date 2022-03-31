import AppError from '@error/errorApp'
import { Client } from 'redis-om'
const client = new Client()

export const connect = async (): Promise<void> => {
  if (process.env['REDIS_URL'] === undefined || process.env['REDIS_URL'] === '') {
    throw new AppError('REDIS_URL is not defined', 400)
  }

  if (!client.isOpen()) {
    await client.open(process.env['REDIS_URL'])
  }
}
export const disconnect = async (): Promise<void> => {
  if (client.isOpen()) {
    await client.close()
  }
}

export default client
