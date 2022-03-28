import agent, { type Response } from '@utils/tests/agent'

export const getAllTasks = async (): Promise<Response> => {
  return await agent.get('/api/v1/tasks/search')
}
