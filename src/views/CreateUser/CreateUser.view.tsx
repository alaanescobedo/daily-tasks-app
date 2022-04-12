import { AuthInput } from '@components/Form'
import { AuthLayout } from '@layouts'

export const CreateUserView = (): JSX.Element => {
  return (
    <AuthLayout title='Create Username' navigateTo='/'>
      <AuthInput label='Username' type='text' name='username' />
    </AuthLayout>
  )
}
