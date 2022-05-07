import { BASE_URL } from 'setup/config/api'

interface ForgotPasswordProps {
  email: string
}
export interface UsernameProps {
  username: string
}
export interface ResetPasswordProps {
  password: string
  token: string
}

export const forgotPassword = async ({ email }: ForgotPasswordProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const resetPassword = async ({ password, token }: ResetPasswordProps): Promise<any> => {
  console.log(token)
  try {
    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ password })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateUsername = async ({ username }: UsernameProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/user/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
