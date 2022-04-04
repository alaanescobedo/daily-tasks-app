import { AuthInput } from '../components/Form/AuthInput'
import { AuthLayout } from '../components/layouts/AuthLayout'

export const ForgotPasswordView = (): JSX.Element => {
  return (
    <AuthLayout navigateTo='/' title='Forgot Password'>
      <AuthInput label='Email' name='email' type='email' />
    </AuthLayout>
  )
}
