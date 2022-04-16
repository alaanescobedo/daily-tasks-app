import { Input, InputGroup } from '@components/Form'
import { SIGNUP_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { objectValues, ValueOf } from '@utils/Typescript/values'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignupView = (): JSX.Element => {
  const { fields, handleFieldsChange } = useForm(SIGNUP_INPUT_CONFIG)
  const navigate = useNavigate()

  const handleContinue = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { id } = e.currentTarget
    const serializeData = objectValues(fields).map(({ handleChange, ...fields }) => fields) as [ValueOf <typeof fields>]
    navigate('/create-username', { state: { data: serializeData, id } })
  }

  return (
    <AuthLayout title='Sign up' handleSubmit={handleContinue} id='signup'>
      {objectValues(fields).map((field) => (
        <InputGroup htmlFor={field.id} label={field.label} key={field.id}>
          <Input type={field.type} id={field.id} handleChange={handleFieldsChange} value={field.value} />
        </InputGroup>
      ))}
    </AuthLayout>
  )
}
