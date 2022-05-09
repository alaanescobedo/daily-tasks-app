import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Form, Stack, TextField, Typography } from '@ui/components'
import { AuthLayout } from '@ui/layouts'
import { objectValues } from '@utils/Typescript/values'
import signupSchema from '@utils/Form/validations/signup.schema'
import { SIGNUP_INPUT_CONFIG } from '@modules/auth/config'


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
            <TextField
              {...register(id)}
              key={id}
              type={type}
              placeholder={placeholder}
              required={required}
              label={label}
              error={errors[id]?.message}
            />
          ))}
        </Stack>
        <Button type='submit' label='Continue' />
      </Form>
    </AuthLayout>
  )
}
