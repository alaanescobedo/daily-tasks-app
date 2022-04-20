import { Input, InputGroup } from '@components/Form'
import { SIGNIN_USER_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'

export const SigninView = (): JSX.Element => {
  const { fields, handleSubmit, handleFieldsChange } = useForm(SIGNIN_USER_INPUT_CONFIG)
  return (
    <AuthLayout title='Sign In' id='signin' handleSubmit={handleSubmit}>
      {objectValues(fields).map(({ id, label, type, value }) => (
        <InputGroup htmlFor={id} label={label} key={id}>
          <Input id={id} type={type} handleChange={handleFieldsChange} value={value} />
        </InputGroup>
      ))}
    </AuthLayout>
  )
}
