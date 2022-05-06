import { REDIS_URL, EMPTY_STRING } from '@constants'
import AppError from '@error/errorApp'
import { Client } from 'redis-om'

const client = new Client()

export const connect = async (): Promise<void> => {
  if (REDIS_URL === EMPTY_STRING) throw new AppError('REDIS_URL is not defined', 400)

  if (!client.isOpen()) {
    await client.open(REDIS_URL)
  }
}
export const disconnect = async (): Promise<void> => {
  if (client.isOpen()) {
    await client.close()
  }
}

export default client
