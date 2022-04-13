import { Form_Values_New_Task } from '@interfaces'
import { getCurrentDate } from '@utils/getCurrentDate'

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
  const currentTime = new Date(currentDay).getTime()
  const valueTime = new Date(value).getTime()

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
  const currentDay = getCurrentDate('en-US', Date.now()).split(',')[1].trim()
  const valueTime = new Date(`${currentDay},${value as string}`).getTime()
  const currentTime = Date.now()

  if (value === undefined) {
    errors.hour = 'Hour is required'
    return errors
  }

  if (valueTime < currentTime) {
    errors.hour = 'Hour must be greater than current time'
    return errors
  } return errors
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
