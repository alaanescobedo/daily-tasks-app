import { Client } from 'redis-om'
const client = new Client()

export const connect = async (): Promise<void> => {
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
