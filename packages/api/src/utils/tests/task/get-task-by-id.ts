import agent, { type Response } from '@utils/tests/agent'

export const getTaskById = async (id: string, token: string): Promise<Response> => {
  return await agent.get(`/api/v1/tasks/search/${id}`).set('Authorization', `bearer ${token}`)
}
