import { InputGroup } from '@components/Form'
import { Form } from '@components/Form/Form'
import { SIGNUP_INPUT_CONFIG } from 'modules/auth/config/auth-form.config'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import signupSchema from '@utils/Form/validations/signup.schema'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography/Typography'
import { Button } from '@components/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { InputBase } from '@components/Form/TextField/InputBase/InputBase'

const fields = SIGNUP_INPUT_CONFIG

type FormInputs = {
  [key in keyof typeof fields]: string
}

export const SignupView = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(signupSchema)
  })

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleSubmitForm = (data: any): void => {
    navigate('/create-username', { state: { data, from: pathname } })
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(handleSubmitForm)} id='signup' title='Sign up'>
        <Typography variant='h1' color='primary' center size='3xl' weight='bold'>Singup</Typography>
        <Stack vertical gap='2rem' mb='2.4rem'>
          {objectValues(fields).map(({ id, type, label, required, placeholder }) => (
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
        </Stack>
        <Button type='submit' label='Continue' />
      </Form>
    </AuthLayout>
  )
}
