import { Form_Auth_Signin, Form_Auth_Signup, Form_Create_Username, Form_Forgot_Password, Form_Reset_Password } from '@interfaces'

const emailConfig = {
  type: 'email',
  label: 'Email',
  id: 'email',
  required: true,
  handleChange: () => { }
}
const passwordConfig = {
  id: 'password',
  label: 'Password',
  type: 'password',
  required: true,
  handleChange: () => { }
}
const passwordConfirmConfig = {
  id: 'passwordConfirm',
  label: 'Confirm Password',
  type: 'password',
  required: true,
  handleChange: () => { }
}
const usernameConfig = {
  id: 'username',
  label: 'Username',
  type: 'text',
  required: true,
  handleChange: () => { }
}

export const SIGNUP_INPUT_CONFIG: Form_Auth_Signup = {
  email: emailConfig,
  password: passwordConfig,
  passwordConfirm: passwordConfirmConfig
}
export const CREATE_USER_INPUT_CONFIG: Form_Create_Username = {
  username: usernameConfig
}
export const SIGNIN_USER_INPUT_CONFIG: Form_Auth_Signin = {
  email: emailConfig,
  password: passwordConfig
}
export const FORGOT_PASSWORD_INPUT_CONFIG: Form_Forgot_Password = {
  email: emailConfig
}
export const RESET_PASSWORD_INPUT_CONFIG: Form_Reset_Password = {
  password: passwordConfig
}
