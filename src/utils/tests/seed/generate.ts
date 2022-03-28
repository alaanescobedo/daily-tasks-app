import agent, { type Response } from '@utils/tests/agent'

export const generateSeed = async (): Promise<Response> => {
  return await agent.get('/api/v1/seeds/generate')
}
