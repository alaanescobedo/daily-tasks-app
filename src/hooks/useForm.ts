import { ChangeEvent, useState } from 'react'
import { Form_New_Task, Input_Fields_New_Task, Input_Types_New_Task } from '../interfaces'
import { Entries } from '../views/NewTask.view'

const buildFields = (fieldsConfig: Entries<Form_New_Task>): Input_Fields_New_Task => {
  return fieldsConfig.reduce<any>((acc, field) => {
    const [id, config] = field

    acc[id] = {
      config: { ...config },
      isValid: false,
      errorMessage: ''
    }
    return acc
  }, {})
}

interface UseForm {
  fields: Input_Fields_New_Task
  handleFieldsChange: (e: ChangeEvent<Input_Types_New_Task>) => void
}

export const useForm = (fieldsConfig: Entries<Form_New_Task>): UseForm => {
  const [fields, setFields] = useState(buildFields(fieldsConfig))

  const handleFieldsChange = (e: ChangeEvent<Input_Types_New_Task>): any => {
    const { id, value } = e.target as { id: keyof Form_New_Task, value: string }

    setFields(() => ({
      ...fields,
      [id]: { ...fields[id], value }
    }))
  }
  return {
    fields,
    handleFieldsChange
  }
}
