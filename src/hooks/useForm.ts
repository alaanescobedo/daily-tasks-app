import { useState } from 'react'

const buildFields = (ids: any): any => {
  return ids.reduce((acc, field) => {
    acc[field] = { valid: false, value: '', errorMessage: '' }
    return acc
  }, {})
}

export const useForm = ({ ids }: any): any => {
  const [fields] = useState(buildFields(ids))

  return {
    fields
  }
}
