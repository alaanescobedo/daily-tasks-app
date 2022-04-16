import { BASE_URL } from '@config/constants'

interface ForgotPasswordProps {
  email: string
  password: string
}

export const forgotPassword = async ({ email, password }: ForgotPasswordProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/user/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
