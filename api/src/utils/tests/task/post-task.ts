import agent, { type Response } from '@utils/tests/agent'
import type { TaskClientData } from '@task/taskInterface'

export const postTask = async (task: TaskClientData, jwtToken: string): Promise<Response> => {
  return await agent.post('/api/v1/tasks').set('Authorization', `bearer ${jwtToken}`).send(task)
}
