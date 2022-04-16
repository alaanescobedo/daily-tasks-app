import { Input, InputGroup } from '@components/Form'
import { SIGNUP_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignupView = (): JSX.Element => {
  const { fields, handleFieldsChange } = useForm(SIGNUP_INPUT_CONFIG)
  const navigate = useNavigate()
  const handleContinue = (e: FormEvent<HTMLFormElement>): void => {
    const { id } = e.currentTarget
    navigate('/create-username', { state: { fields, id } })
  }

  return (
    <AuthLayout title='Sign up' handleSubmit={handleContinue} id='Signup'>
      {objectValues(fields).map((field) => (
        <InputGroup htmlFor={field.id} label={field.label} key={field.id}>
          <Input type={field.type} id={field.id} handleChange={handleFieldsChange} value={field.value} />
        </InputGroup>
      ))}
    </AuthLayout>
  )
}
