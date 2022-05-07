export interface SignupUserClientData {
  username: string
  password: string
  email: string
}
export interface LoginUserClientData {
  password: string
  email: string
}
export interface ForgotPasswordClientData {
  email: string
}
export interface ResetPasswordClientData {
  password: string
}
