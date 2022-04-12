import { AuthInput } from '@components/Form'
import { AuthLayout } from '@layouts'

export const ForgotPasswordView = (): JSX.Element => {
  return (
    <AuthLayout navigateTo='/' title='Forgot Password'>
      <AuthInput label='Email' name='email' type='email' />
    </AuthLayout>
  )
}
