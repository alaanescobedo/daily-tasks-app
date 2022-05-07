
import type { SignupUserClientData } from '@auth/auth.interfaces'
import agent, { type Response } from '../agent'

export const signup = async (newUser: SignupUserClientData): Promise<Response> => {
  return await agent.post('/api/v1/auth/signup/').send(newUser)
}
