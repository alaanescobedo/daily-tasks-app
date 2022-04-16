import { Input, InputGroup } from '@components/Form'
import { FORGOT_PASSWORD_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'

export const ForgotPasswordView = (): JSX.Element => {
  const { fields, handleFieldsChange, handleSubmit } = useForm(FORGOT_PASSWORD_INPUT_CONFIG)
  return (
    <AuthLayout title='Forgot Password' handleSubmit={handleSubmit} id='forgotPassword'>
      {objectValues(fields).map(({ label, id, type }) => (
        <InputGroup htmlFor={id} label={label} key={id}>
          <Input id={id} type={type} handleChange={handleFieldsChange} />
        </InputGroup>
      ))}
    </AuthLayout>
  )
}
