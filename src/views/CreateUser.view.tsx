import { AuthInput } from '../components/Form/AuthInput'
import { AuthLayout } from '../layouts/AuthLayout'

export const CreateUserView = (): JSX.Element => {
  return (
    <AuthLayout title='Create Username' navigateTo='/'>
      <AuthInput label='Username' type='text' name='username' />
    </AuthLayout>
  )
}
