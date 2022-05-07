import { Input } from '@components/Form'
import { FORGOT_PASSWORD_INPUT_CONFIG } from 'modules/auth/config/auth-form.config'
import { useForm } from '@hooks'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordView = (): JSX.Element => {
  // const { fields, handleFieldsChange, handleSubmit, successForm } = useForm(FORGOT_PASSWORD_INPUT_CONFIG)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (successForm) {
  //     navigate('/status-operation', { replace: true })
  //   }
  // }, [successForm])

  return (
    // <AuthLayout title='Forgot Password' handleSubmit={handleSubmit} id='forgotPassword'>
    //   {objectValues(fields).map(({ label, id, type, value }) => (
    //     // <InputGroup htmlFor={id} label={label} key={id}>
    //     //   <Input id={id} type={type} handleChange={handleFieldsChange} value={value} />
    //     // </InputGroup>
    //   ))}
    // </AuthLayout>
    <div />
  )
}
