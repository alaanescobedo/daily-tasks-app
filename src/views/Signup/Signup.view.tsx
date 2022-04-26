import { Input, InputGroup } from '@components/Form'
import { Form } from '@components/Form/Form'
import { SIGNUP_INPUT_CONFIG } from '@config/auth-form.config'
import { AuthLayout } from '@layouts'
import { objectValues } from '@utils/Typescript/values'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import signupSchema from '@utils/Form/validations/signup.schema'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography/Typography'
import { Button } from '@components/Button'
import { useNavigate } from 'react-router-dom'

const fields = SIGNUP_INPUT_CONFIG

type FormInputs = {
  [key in keyof typeof fields]: string
}

export const SignupView = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormInputs>({
    resolver: yupResolver(signupSchema)
  })

  const navigate = useNavigate()

  const handleSubmitForm = (data: any): void => {
    navigate('/create-username', { state: { data } })
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(handleSubmitForm)} id='signup' title='Sign up'>
        <Stack vertical gap='2rem' mb='2.4rem'>
          <Typography variant='h1' color='primary' size='3xl' weight='bold'>Singup</Typography>
          {objectValues(fields).map((field) => (
            <Controller
              key={field.id}
              control={control}
              name={field.id}
              render={({
                field: { onChange, onBlur, name, ref, value },
                fieldState: { error }
              }) => (
                <InputGroup htmlFor={field.id} label={field.label} errorMessage={error?.message}>
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    inputRef={ref}
                    value={value}
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    defaultValue={field.defaultValue}
                    isInvalid={(errors[name] != null)}
                    isValid={!!(isSubmitted && (error == null))}
                  />
                </InputGroup>
              )}
            />
          ))}
        </Stack>
        <Button label='Continue' />
      </Form>
    </AuthLayout>
  )
}
