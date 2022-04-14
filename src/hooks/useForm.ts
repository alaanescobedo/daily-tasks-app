import { ChangeEvent, FormEvent, useState } from 'react'
import { type Forms, Form_New_Task, Form_Values_New_Task, Input_Types, Form_Errors, Input_Base } from '@interfaces'
import { validateInput } from '@utils/Form'
import { type Entries } from 'views/NewTask/NewTask.view'
import { Task, useTasks } from './useTasks'

const buildFieldsErrors = <T extends Forms>(fieldsConfig: T): Form_Errors<T> => {
  const fieldsArr = Object.values(fieldsConfig) as [Input_Base]

  return fieldsArr.reduce<any>((acc, { id }) => {
    return {
      ...acc,
      [id]: { errorMessage: '' }
    }
  }, {})
}

interface UseForm<T> {
  fields: T
  errors: Entries<T>
  isValid: boolean
  handleFieldsChange: (e: ChangeEvent<Input_Types>) => void
  handleSetFields: (updatedFields: T) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const useForm = <T extends Forms>(fieldsConfig: T): UseForm<T> => {
  const [fields, setFields] = useState(fieldsConfig)
  const [errors, setErrors] = useState(buildFieldsErrors(fieldsConfig))
  const [isValid, setIsValid] = useState(false)
  const { saveTask } = useTasks()

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

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))
    const entries = Object.entries(data)

    const updatedErrors = entries.reduce((acc, entry) => {
      const [id, value] = entry as [keyof Form_New_Task, string]
      const error = validateInput([id, value])
      const isError = Object.keys(error).length > 0

      const errorMessage = { errorMessage: isError ? error[id] : '' }
      return {
        ...acc,
        [id]: errorMessage
      }
    }, {})

    const errorFinded: any = Object.values(updatedErrors).find((error: any) => error?.errorMessage !== '')

    console.log(errorFinded)

    if (errorFinded !== undefined && Object.keys(errorFinded).length > 0) {
      setIsValid(() => false)
      return setErrors(() => updatedErrors)
    }
    setIsValid(() => true)

    const { day, hour, title } = data as unknown as Form_Values_New_Task

    const date = new Date(`${day}, ${hour}`)

    const newTask: Task = {
      title,
      scheduledFor: date.toISOString(),
      createdAt: new Date().toISOString(),
      status: 'Pending',
      userID: 'GUEST',
      entityId: Math.random().toString()
    }

    saveTask(newTask)
    //* Clear textarea
    handleSetFields({ ...fields, title: { ...fields.title, value: '' } })
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
