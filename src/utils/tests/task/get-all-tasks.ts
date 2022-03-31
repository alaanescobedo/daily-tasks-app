import agent, { type Response } from '@utils/tests/agent'

export const getAllTasks = async (userID: string, jwtToken: string): Promise<Response> => {
  return await agent.get('/api/v1/tasks/search').set('Authorization', `bearer ${jwtToken}`).send(userID)
}
