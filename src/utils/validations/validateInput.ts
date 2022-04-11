import { Form_Values_New_Task } from '../../interfaces'
import { getCurrentDate } from '../getCurrentDate'

// * Validate New Task form
export const validateInput = (input: [keyof Form_Values_New_Task, string]): any => {
  const errors: Object = {}
  const [key, value] = input

  const inputs = {
    title: () => validateTextArea({ value, errors }),
    day: () => validateDay({ value, errors }),
    hour: () => validateHour({ value, errors }),
    priority: () => validatePriority({ value, errors }),
    recurrent: () => validateRecurrent({ value, errors })
  }

  const validatedErrors = inputs[key]() ?? errors
  return validatedErrors
}

//* Validations by input id
const validateTextArea = ({ value, errors }: any): any => {
  if (value === undefined || value.length <= 0) {
    errors.title = 'Title is required'
    return errors
  }
  return errors
}
const validateDay = ({ value, errors }: any): any => {
  const currentDay = getCurrentDate('en-US', Date.now()).split(',')[1].trim()
  const valueTime = new Date(value).getTime()
  const currentTime = new Date(currentDay).getTime()

  if (isNaN(valueTime)) {
    errors.day = 'Selected day is invalid'
    return errors
  }

  if (value === undefined) {
    errors.day = 'Day is required'
    return errors
  }

  if (valueTime < currentTime) {
    errors.day = 'Day must be greater than today'
    return errors
  }

  return errors
}
const validateHour = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.hour = 'Hour is required'
    return errors
  }
  return errors
}
const validatePriority = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.priority = 'Priority is required'
    return errors
  }
  return errors
}
const validateRecurrent = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.recurrent = 'Recurrent is required'
    return errors
  }
  return errors
}
