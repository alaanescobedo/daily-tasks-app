import { AuthInput } from '../components/Form/AuthInput'
import { AuthLayout } from '../components/layouts/AuthLayout'

export const SignupView = (): JSX.Element => {
  return (
    <AuthLayout title='Sign up' navigateTo='/signup/create-username'>
      <AuthInput label='Email' type='email' name='email' />
      <AuthInput label='Password' type='password' name='password' />
      <AuthInput label='Confirm Password' type='password' name='passwordConfirm' />
    </AuthLayout>
  )
}
