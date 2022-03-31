import type { NewUserClientData } from '@user/userInterface'
import agent, { type Response } from '../agent'

export const signup = async (newUser: NewUserClientData): Promise<Response> => {
  return await agent.post('/api/v1/auth/signup/').send(newUser)
}
