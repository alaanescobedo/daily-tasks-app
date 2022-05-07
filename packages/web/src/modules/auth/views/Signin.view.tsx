import { InputGroup } from '@components/Form'
import { Form } from '@components/Form/Form'
import { SIGNIN_USER_INPUT_CONFIG } from 'modules/auth/config/auth-form.config'
import { objectValues } from '@utils/Typescript/values'
import { Button } from '@components/Button'
import { useForm } from 'react-hook-form'
import { InputBase } from '@components/Form/TextField/InputBase/InputBase'

const fields = SIGNIN_USER_INPUT_CONFIG

type FormInputs = {
  [key in keyof typeof fields]: string
}

export const SigninView = (): JSX.Element => {
  // const { fields, handleSubmit, handleFieldsChange, successForm } = useForm(SIGNIN_USER_INPUT_CONFIG)
  const { register, handleSubmit, formState: { isSubmitSuccessful, errors } } = useForm<FormInputs>()

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (successForm) {
  //     navigate('/', { replace: true })
  //   }
  // }, [successForm])
  const onSubmit = (data: FormInputs) => {
    console.log(data)
  }

  return (
    <Form id='signin' onSubmit={handleSubmit(onSubmit)} title='Sign In'>
      {objectValues(fields).map(({ id, label, type, placeholder, required }) => (
        <InputGroup
          key={id}
          id={id}
          name={id}
          error={errors[id]?.message}
          label={label}
          required
        >
          <InputBase
            {...register(id)}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        </InputGroup>
      ))}
      <Button type='submit' label='Continue' />
    </Form>
  )
}
