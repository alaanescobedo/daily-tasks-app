import { BASE_URL } from '@config/constants'
interface SignupProps {
  username: string
  email: string
  password: string
}

export const signup = async ({ username, email, password }: SignupProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
