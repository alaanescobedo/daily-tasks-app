import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Alert, Button, Form, Stack, TextField, Typography } from '@ui/components'
import usernameSchema from '@utils/Form/validations/username.schema'
import { objectValues } from '@utils/Typescript/values'
import { AuthLayout } from '@ui/layouts'
import { CREATE_USER_INPUT_CONFIG } from '@modules/auth/config'
import { signup } from 'modules/auth/api/auth.service'
import { useUser } from '@modules/user/state'


const fields = CREATE_USER_INPUT_CONFIG
type FormInputs = {
  [key in keyof typeof fields]: string
}

export const CreateUserView = (): JSX.Element => {
  const { register, handleSubmit, getValues, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm<FormInputs>({
    resolver: yupResolver(usernameSchema)
  })
  const navigate = useNavigate()
  const location = useLocation()
  const { setCurrentUser } = useUser()

  const { state } = location as { state: { data: any, from: string } }
  const { data: signupData, from } = state ?? { data: [], from: '' }

  const handleSubmitForm = async (usernameData: any): Promise<void> => {
    if (from === '/auth/signup') {
      const body = { ...signupData, ...usernameData }
      const { user } = await signup(body)
      if (user === undefined) return
      setCurrentUser(user)
    } else {
      setCurrentUser(usernameData.username)
    }
  }

  useEffect(() => {
    if (!isSubmitSuccessful) return
    const username = getValues('username')
    navigate('/', { state: { username }, replace: true })
  }, [isSubmitSuccessful])

  return (
    <AuthLayout>
      {isSubmitting && <Alert status='info' variant='outline' message='Creating account...' />}
      {Object.keys(errors).length > 0 && <Alert status='error' variant='outline' message='Invalid data' />}
      <Form onSubmit={handleSubmit(handleSubmitForm)} id='signup' title='Sign up'>
        <Stack vertical gap='2rem' mb='2.4rem'>
          <Typography variant='h1' color='primary' size='3xl' weight='bold'>Create username</Typography>
          {objectValues(fields).map(({ id, type, label, required, placeholder }) => (
            <TextField
              {...register(id)}
              key={id}
              type={type}
              label={label}
              required={required}
              placeholder={placeholder}
              error={errors[id]?.message}
            />
          ))}
        </Stack>
        <Button type='submit' label='Submit' />
      </Form>
    </AuthLayout>
  )
}
