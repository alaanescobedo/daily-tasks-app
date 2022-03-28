import agent, { type Response } from '@utils/tests/agent'

export const createIndex = async (): Promise<Response> => {
  return await agent.get('/api/v1/tasks/create-index')
}
