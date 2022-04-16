import { Form_Auth_Signup, Form_Create_Username } from '@interfaces'

export const SIGNUP_INPUT_CONFIG: Form_Auth_Signup = {
  email: {
    type: 'email',
    label: 'Email',
    id: 'email',
    required: true,
    handleChange: () => { }
  },
  password: {
    id: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    handleChange: () => { }
  },
  passwordConfirm: {
    id: 'passwordConfirm',
    label: 'Confirm Password',
    type: 'password',
    required: true,
    handleChange: () => { }
  }
}

export const CREATE_USER_INPUT_CONFIG: Form_Create_Username = {
  username: {
    id: 'username',
    label: 'Username',
    type: 'text',
    required: true
  }
}
