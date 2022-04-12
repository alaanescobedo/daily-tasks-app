import { AuthInput } from '../../components/Form/AuthInput'
import { AuthLayout } from '../../layouts/AuthLayout'

export const SigninView = (): JSX.Element => {
  return (
    <AuthLayout title='Sign In' navigateTo='/'>
      <AuthInput label='Email' name='email' type='email' />
      <AuthInput label='Password' name='password' type='password' />
    </AuthLayout>
  )
}
