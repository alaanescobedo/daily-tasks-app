import { Forms } from '@modules/form.interface'
import { getCurrentDate } from '@utils/getCurrentDate'

// * Validate New Task form
export const validateInput = <T>(input: [keyof T, string]): any => {
  const errors: Object = {}
  const [key, value] = input as [keyof Forms, string]

  const inputs = {
    title: () => validateTextArea({ value, errors }),
    day: () => validateDay({ value, errors }),
    hour: () => validateHour({ value, errors }),
    priority: () => validatePriority({ value, errors }),
    recurrent: () => validateRecurrent({ value, errors }),
    email: () => validateEmail({ value, errors }),
    password: () => validatePassword({ value, errors }),
    passwordConfirm: () => validatePassword({ value, errors }),
    username: () => validateUsername({ value, errors })
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
//* Auth
const validateEmail = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.email = 'Email is required'
    return errors
  }
  return errors
}
const validatePassword = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.password = 'Password is required'
    return errors
  }
  return errors
}
const validateUsername = ({ value, errors }: any): any => {
  if (value === undefined) {
    errors.username = 'Username is required'
    return errors
  }
  return errors
}
