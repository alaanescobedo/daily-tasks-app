import { Button } from '@components/Button'
import { Input, InputGroup } from '@components/Form'
import { Form } from '@components/Form/Form'
import { Stack } from '@components/Stack'
import { Typography } from '@components/Typography/Typography'
import { CREATE_USER_INPUT_CONFIG } from '@config/auth-form.config'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form_Auth_Signup } from '@interfaces'
import { AuthLayout } from '@layouts'
import { fetch } from '@utils/Fetch'
import usernameSchema from '@utils/Form/validations/username.schema'
import { objectValues, type ValueOf } from '@utils/Typescript/values'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

const fields = CREATE_USER_INPUT_CONFIG
type FormInputs = {
  [key in keyof typeof fields]: string
}

export const CreateUserView = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors, isSubmitted, isSubmitSuccessful, isSubmitting } } = useForm<FormInputs>({
    resolver: yupResolver(usernameSchema)
  })
  const location = useLocation()
  const navigate = useNavigate()
  const { setCurrentUser } = useUser()

  const { state } = location as { state: { data: [ValueOf<Form_Auth_Signup>], id: string } }
  const { data: signupData } = state ?? { data: [], id: '' }

  const handleSubmitForm = async (usernameData: any): Promise<void> => {
    const body = {
      ...signupData,
      ...usernameData
    }
    const { user } = await fetch.post({ endpoint: '/auth/signup', body })
    setCurrentUser(user)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate('/status-operation', { state: { data: signupData, id: 'signup' }, replace: true })
    }
  }, [isSubmitSuccessful])

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(handleSubmitForm)} id='signup' title='Sign up'>
        <Stack vertical gap='2rem' mb='2.4rem'>
          <Typography variant='h1' color='primary' size='3xl' weight='bold'>Create username</Typography>
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
                    disabled={isSubmitting}
                  />
                </InputGroup>
              )}
            />
          ))}
        </Stack>
        <Button label='Submit' />
      </Form>
    </AuthLayout>
  )
}
