import { AuthInput } from '@components/Form'
import { SIGNUP_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { signup } from 'services/auth.service'
import { entries } from 'views/NewTask'

export const SignupView = (): JSX.Element => {
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const data = await signup({ username: 'username', email: 'user@gmail.com', password: 'password123' })
    // navigate('/signup/create-username')
    console.log(data)
  }

  const { fields } = useForm(entries(SIGNUP_INPUT_CONFIG))
  console.log(fields)
  return (
    <AuthLayout title='Sign up' handleSubmit={handleSignup}>
      <AuthInput label='Email' type='email' name='email' />
      <AuthInput label='Password' type='password' name='password' />
      <AuthInput label='Confirm Password' type='password' name='passwordConfirm' />
    </AuthLayout>
  )
}
