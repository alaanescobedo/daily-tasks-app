import { ChangeEvent, FormEvent, useState } from 'react'
import { Forms, Input_Types, Form_Errors, Input_Base, ErrorMessage } from '@interfaces'
import { validateInput } from '@utils/Form'
import { useTasks } from './useTasks'
import { signin, signup } from 'services/auth.service'
import { forgotPassword, resetPassword } from 'services/user.service'

const buildFieldsErrors = <T extends Forms>(fieldsConfig: T): Form_Errors<T> => {
  const fieldsArr = Object.values(fieldsConfig) as [Input_Base]

  return fieldsArr.reduce<any>((acc, { id }) => {
    return {
      ...acc,
      [id]: { errorMessage: '' }
    }
  }, {})
}

interface UseForm<T extends Forms> {
  fields: T
  errors: Form_Errors<T>
  isValid: boolean
  successForm: boolean
  handleFieldsChange: (e: ChangeEvent<Input_Types>) => void
  handleSetFields: (updatedFields: T) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>, token?: string) => void
}

export const useForm = <T extends Forms>(fieldsConfig: T): UseForm<T> => {
  const [fields, setFields] = useState(fieldsConfig)
  const [errors, setErrors] = useState(buildFieldsErrors(fieldsConfig))
  const [isValid, setIsValid] = useState(false)
  const [successForm, setSuccesForm] = useState(false)
  const { submitNewTask } = useTasks()

  const handleFieldsChange = (e: ChangeEvent<Input_Types>): void => {
    const { id, value } = e.target as { id: keyof T, value: string }

    if (id === 'title' && value.includes('\n')) return

    const updatedConfig = { ...fields[id], value }
    const updatedFields = { ...fields, [id]: updatedConfig }

    handleSetFields(updatedFields)
  }

  const handleSetFields = (updatedFields: T): void => {
    setFields(() => updatedFields)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, token?: string): Promise<void> => {
    e.preventDefault()
    const { currentTarget } = e

    const data = Object.fromEntries(new FormData(currentTarget))
    const entries = Object.entries(data)

    // TODO: Refactor -- Validate Input and Errors
    const updatedErrors = entries.reduce<Form_Errors<T>>((acc, entry) => {
      const [id, value] = entry as [keyof T, string]
      const error = validateInput([id, value])
      const isError = Object.keys(error).length > 0

      const errorMessage = { errorMessage: isError ? error[id] : '' }
      return {
        ...acc,
        [id]: errorMessage
      }
    }, errors)

    const listErrors = Object.values(updatedErrors)
    const { errorMessage } = listErrors.find(({ errorMessage }: ErrorMessage) => errorMessage !== '') ?? { errorMessage: '' }

    if (errorMessage.length >= 1) {
      setIsValid(() => false)
      return setErrors(() => updatedErrors)
    }
    // TODO: --- END TODO

    setIsValid(() => true)

    const { id } = currentTarget as { id: 'newTask' | 'signup' | 'signin' | 'forgotPassword' | 'resetPassword' }
    const Formulary = {
      newTask: () => submitNewTask(data as any), // TODO: Remove any
      signup: async () => await signup(data as any), // TODO: Remove any
      signin: async () => await signin(data as any), // TODO: Remove any
      forgotPassword: async () => await forgotPassword(data as any), // TODO: Remove any
      resetPassword: async () => await resetPassword({ ...data, token } as any) // TODO: Remove any
    }
    const res = await Formulary[id]() ?? console.log('Formulary not found')
    if (res.status === 'failure') return setErrors(() => res.errors)

    //* Clear Values
    // TODO Iterate over each field and reset to defaulValue
    console.log(data)
    // handleSetFields({ ...fields, title: { ...fields.title, value: '' } })

    setSuccesForm(() => true)
  }

  return {
    fields,
    errors,
    isValid,
    successForm,
    handleFieldsChange,
    handleSetFields,
    handleSubmit
  }
}
