import { ChangeEvent, FormEvent, useState } from 'react'
import { Form_New_Task, Form_Values_New_Task, Input_Fields_New_Task, Input_Types_New_Task } from '../interfaces'
import { validateInput } from '../utils/validations/validateInput'
import { Entries } from '../views/NewTask.view'
import { Task, useTasks } from './useTasks'

const buildFields = (fieldsConfig: Entries<Form_New_Task>): Input_Fields_New_Task => {
  return fieldsConfig.reduce<any>((acc, [id, config]) => {
    acc[id] = config
    return acc
  }, {})
}

const buildFieldsErrors = (fieldsConfig: Entries<Form_New_Task>): any => {
  return fieldsConfig.reduce<any>((acc, [id]) => {
    acc[id] = {
      errorMessage: ''
    }
    return acc
  }, {})
}

interface UseForm {
  fields: Input_Fields_New_Task
  errors: any
  isValid: boolean
  handleFieldsChange: (e: ChangeEvent<Input_Types_New_Task>) => void
  handleSetFields: (updatedFields: Input_Fields_New_Task) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const useForm = (fieldsConfig: Entries<Form_New_Task>): UseForm => {
  const [fields, setFields] = useState(buildFields(fieldsConfig))
  const [errors, setErrors] = useState(buildFieldsErrors(fieldsConfig))
  const [isValid, setIsValid] = useState(false)

  const { saveTask } = useTasks()

  const handleFieldsChange = (e: ChangeEvent<Input_Types_New_Task>): any => {
    const { id, value } = e.target as { id: keyof Form_New_Task, value: string }

    if (id === 'title' && value.includes('\n')) return

    const updatedConfig = { ...fields[id], value }
    const updatedFields = { ...fields, [id]: updatedConfig }

    handleSetFields(updatedFields)

    //* Resize textarea
    if (id === 'title') {
      const textarea = e.target
      textarea.style.height = '2.6rem'
      if (textarea.scrollHeight < textarea.offsetHeight) return

      const scrollHeight = textarea.scrollHeight
      textarea.style.height = `${scrollHeight}px`
    }
  }

  const handleSetFields = (updatedFields: Input_Fields_New_Task): void => {
    setFields(() => updatedFields)
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))
    const entries = Object.entries(data)

    const updatedErrors = entries.reduce<Entries<Form_New_Task>>((acc, entry) => {
      const [id, value] = entry as [keyof Form_New_Task, string]
      const error = validateInput([id, value])
      const isError = Object.keys(error).length > 0

      const errorMessage = { errorMessage: isError ? error[id] : '' }
      return {
        ...acc,
        [id]: errorMessage
      }
    }, {} as any)

    const errorFinded: any = Object.values(updatedErrors).find((error: any) => error?.errorMessage !== '')

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
