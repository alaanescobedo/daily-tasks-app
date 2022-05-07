const emailConfig = {
  type: 'email',
  label: 'Email',
  placeholder: 'user@example.com',
  id: 'email',
  required: true,
  defaultValue: '',
  handleChange: () => { }
} as const
const passwordConfig = {
  id: 'password',
  label: 'Password',
  placeholder: 'Password123!',
  type: 'password',
  required: true,
  defaultValue: '',
  handleChange: () => { }
} as const
const passwordConfirmConfig = {
  id: 'passwordConfirm',
  label: 'Confirm Password',
  placeholder: 'Password123!',
  type: 'password',
  required: true,
  defaultValue: '',
  handleChange: () => { }
} as const
const usernameConfig = {
  id: 'username',
  label: 'Username',
  placeholder: 'Username',
  type: 'text',
  required: true,
  defaultValue: '',
  handleChange: () => { }
} as const

export const SIGNUP_INPUT_CONFIG = {
  email: emailConfig,
  password: passwordConfig,
  passwordConfirm: passwordConfirmConfig
}
export const CREATE_USER_INPUT_CONFIG = {
  username: usernameConfig
}
export const SIGNIN_USER_INPUT_CONFIG = {
  email: emailConfig,
  password: passwordConfig
}
export const FORGOT_PASSWORD_INPUT_CONFIG = {
  email: emailConfig
}
export const RESET_PASSWORD_INPUT_CONFIG = {
  password: passwordConfig
}
