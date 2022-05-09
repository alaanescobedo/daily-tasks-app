// import { Input } from '@components/Form'
// import { RESET_PASSWORD_INPUT_CONFIG } from 'modules/auth/config/auth-form.config'
// import { useForm } from '@hooks'
// import { AuthLayout } from '@layouts'
// import { objectValues } from '@utils/Typescript/values'
// import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const ResetPasswordView = (): JSX.Element => {
  // const { fields, handleFieldsChange, handleSubmit, successForm } = useForm(RESET_PASSWORD_INPUT_CONFIG)
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token') ?? ''
  const navigate = useNavigate()

  if (token === '') {
    navigate('/')
  }

  // useEffect(() => {
  //   if (successForm) {
  //     navigate('/status-operation', { replace: true })
  //   }
  // }, [successForm])

  return (
    <div />
    // <AuthLayout title='Reset Password' handleSubmit={(e) => handleSubmit(e, token)} id='resetPassword'>
    //   {objectValues(fields).map(({ label, id, type, value }) => (
    //     <InputGroup htmlFor={id} label={label} key={id}>
    //       <Input id={id} type={type} handleChange={handleFieldsChange} value={value} />
    //     </InputGroup>
    //   ))}
    // </AuthLayout>
  )
}
