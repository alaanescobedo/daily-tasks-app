import { Form_Auth_Signup } from '@interfaces'

export const SIGNUP_INPUT_CONFIG: Form_Auth_Signup = {
  email: {
    type: 'email',
    label: 'Email',
    id: 'email',
    required: true
  },
  password: {
    id: 'password',
    label: 'Password',
    type: 'password',
    required: true
  },
  passwordConfirm: {
    id: 'passwordConfirm',
    label: 'Confirm Password',
    type: 'password',
    required: true
  }
}
