import { Input } from '@components/Form'
import { CREATE_USER_INPUT_CONFIG } from '@config/auth-form.config'
import { useForm } from '@hooks'
import { Form_Auth_Signup } from '@interfaces'
import { AuthLayout } from '@layouts'
import { type ValueOf } from '@utils/Typescript/values'
import { useLocation } from 'react-router-dom'

export const CreateUserView = (): JSX.Element => {
  const { handleFieldsChange, handleSubmit } = useForm(CREATE_USER_INPUT_CONFIG)
  const location = useLocation()
  const { state } = location as { state: { data: [ValueOf<Form_Auth_Signup>], id: string } }
  const { data } = state ?? { data: [], id: '' }

  return (
    <AuthLayout title='Create Username' handleSubmit={handleSubmit} id={state.id}>
      <Input type='text' id='username' handleChange={handleFieldsChange} />
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
