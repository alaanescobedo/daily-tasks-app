import { BASE_URL } from '@config/constants'
import { UsernameProps } from './user.service'
interface SignupProps {
  email: string
  password: string
  passwordConfirm: string
}
interface SigninProps {
  email: string
  password: string
}

export const signup = async ({ email, password, passwordConfirm, username }: SignupProps & UsernameProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        username,
        passwordConfirm
      })
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
export const signin = async ({ email, password }: SigninProps): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
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
