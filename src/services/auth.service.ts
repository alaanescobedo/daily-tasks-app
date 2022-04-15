import { BASE_URL } from '@config/constants'
interface SignupProps {
  email: string
  password: string
  passwordConfirm: string
}

export const signup = async ({ email, password, passwordConfirm }: SignupProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        passwordConfirm
      })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
