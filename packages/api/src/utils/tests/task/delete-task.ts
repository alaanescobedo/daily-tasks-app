import agent, { type Response } from '@utils/tests/agent'

export const deleteTask = async (id: string, token: string): Promise<Response> => {
  return await agent.delete(`/api/v1/tasks/${id}`).set('Authorization', `bearer ${token}`)
}
