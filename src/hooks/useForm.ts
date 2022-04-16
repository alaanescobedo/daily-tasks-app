import { ChangeEvent, FormEvent, useState } from 'react'
import { Forms, Input_Types, Form_Errors, Input_Base, ErrorMessage } from '@interfaces'
import { validateInput } from '@utils/Form'
import { useTasks } from './useTasks'
import { signup } from 'services/auth.service'

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
  handleFieldsChange: (e: ChangeEvent<Input_Types>) => void
  handleSetFields: (updatedFields: T) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const useForm = <T extends Forms>(fieldsConfig: T): UseForm<T> => {
  const [fields, setFields] = useState(fieldsConfig)
  const [errors, setErrors] = useState(buildFieldsErrors(fieldsConfig))
  const [isValid, setIsValid] = useState(false)
  const { submitNewTask } = useTasks()

  const handleFieldsChange = (e: ChangeEvent<Input_Types>): void => {
    const { id, value } = e.target as { id: keyof T, value: string }
    if (id === 'title' && value.includes('\n')) return

    const updatedConfig = { ...fields[id], value }
    const updatedFields = { ...fields, [id]: updatedConfig }

    handleSetFields(updatedFields)

    // TODO: Refactor -- Resize textarea
    if (id === 'title') {
      const textarea = e.target
      textarea.style.height = '2.6rem'
      if (textarea.scrollHeight < textarea.offsetHeight) return

      const scrollHeight = textarea.scrollHeight
      textarea.style.height = `${scrollHeight.toString()}px`
    }
  }

  const handleSetFields = (updatedFields: T): void => {
    setFields(() => updatedFields)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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

    if (errorMessage === '') {
      setIsValid(() => false)
      return setErrors(() => updatedErrors)
    }
    // TODO: --- END TODO

    setIsValid(() => true)

    const { id } = currentTarget as { id: 'newTask' | 'signup' }
    const Formulary = {
      newTask: () => submitNewTask(data as any), // TODO: Remove any
      signup: async () => await signup(data as any) // TODO: Remove any
    }
    Formulary[id]() ?? console.log('Formulary not found')

    //* Clear Values
    // TODO Iterate over each field and reset to defaulValue
    console.log(fields)
    // handleSetFields({ ...fields, title: { ...fields.title, value: '' } })
  }

  return {
    fields,
    errors,
    isValid,
    handleFieldsChange,
    handleSetFields,
    handleSubmit
  }
}
