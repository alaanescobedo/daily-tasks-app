import { Input, InputGroup } from '@components/Form'
import { CREATE_USER_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { Form_Auth_Signup } from '@interfaces'
import { AuthLayout } from '@layouts'
import { objectValues, type ValueOf } from '@utils/Typescript/values'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const CreateUserView = (): JSX.Element => {
  const { fields, handleFieldsChange, handleSubmit, successForm } = useForm(CREATE_USER_INPUT_CONFIG)
  const location = useLocation()
  const { state } = location as { state: { data: [ValueOf<Form_Auth_Signup>], id: string } }
  const { data } = state ?? { data: [], id: '' }

  const navigate = useNavigate()

  useEffect(() => {
    if (successForm) {
      navigate('/status-operation', { replace: true })
    }
  }, [successForm])

  return (
    <AuthLayout title='Create Username' handleSubmit={handleSubmit} id={state.id}>
      {objectValues(fields).map(({ id, type, label, value }) => (
        <InputGroup htmlFor={id} label={label} key={id}>
          <Input type={type} id='username' handleChange={handleFieldsChange} value={value} />
        </InputGroup>
      ))}
      {/* (Custom hack). !Todo: Find a way to refactor this, it's ugly, but it works :v
      // We need this to save the previous form values in this form */}
      {data.length > 0
        ? data.map(({ id, value }) => (
          <span key={id}>
            <input style={{ display: 'none' }} name={id} id={id} value={value} onChange={() => { }} />
          </span>
        ))
        : null}
    </AuthLayout>
  )
}
