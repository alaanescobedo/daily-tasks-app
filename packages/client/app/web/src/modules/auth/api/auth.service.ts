import { BASE_URL } from 'setup/config/api'
import { fetch } from '@utils/Fetch'
import { UsernameProps } from '../../user/api/user.service'
interface SignupProps {
  email: string
  password: string
  passwordConfirm: string
}
interface SigninProps {
  email: string
  password: string
}

interface SignupResponse {
  data: { user: any }
  token: string
}

const storageToken = ({ idToken, token }: any) => {
  window.localStorage.setItem(idToken, JSON.stringify(token))
}

export const signup = async ({ email, password, passwordConfirm, username }: SignupProps & UsernameProps) => {
  const res = await fetch.post<SignupResponse>({
    endpoint: '/auth/signup',
    body: {
      email,
      password,
      passwordConfirm,
      username
    }
  })
  storageToken({ idToken: 'key_user', token: res.token })
  return res.data
}

// export const signup = async ({ email, password, passwordConfirm, username }: SignupProps & UsernameProps): Promise<any> => {
//   try {
//     const res = await fetch(`${BASE_URL}/auth/signup`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         username,
//         passwordConfirm
//       })
//     })
//     return await res.json()
//   } catch (error) {
//
//   }
// }
// export const signin = async ({ email, password }: SigninProps): Promise<any> => {
//   try {
//     const res = await fetch(`${BASE_URL}/auth/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     })
//     return await res.json()
//   } catch (error) {
//
//   }
// }
