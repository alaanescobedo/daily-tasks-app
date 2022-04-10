//* Types
type Task_Priority = 'Low' | 'Medium' | 'High'
type Task_Priority_Id = Lowercase<Task_Priority>
export type Input_Types_New_Task = HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement

//* Input Interfaces
interface Input_New_Task_Base {
  id: string
  label: string
  type: string
  required: boolean
}
interface Input_New_Task_Hour extends Input_New_Task_Base { }
interface Input_New_Task_Title extends Input_New_Task_Base {
  placeholder: string
  maxLength: number
  value: string
}
interface Input_New_Task_Day extends Input_New_Task_Base {
  placeholder: string
  defaultValue: string
}
interface Input_New_Task_Recurrent extends Input_New_Task_Base {
  defaultValue: boolean
}
interface Input_New_Task_Priority extends Input_New_Task_Base {
  defaultValue: string
  options: Input_New_Task_Priority_Options[]
}
interface Input_New_Task_Priority_Options {
  id: Task_Priority_Id
  label: Task_Priority
}

//* New Task Fields
export interface Input_Fields_New_Task {
  title: {
    config: Input_New_Task_Title
    isValid: boolean
    errorMessage: string
  }
  day: {
    config: Input_New_Task_Day
    isValid: boolean
    errorMessage: string
  }
  hour: {
    config: Input_New_Task_Hour
    isValid: boolean
    errorMessage: string
  }
  recurrent: {
    config: Input_New_Task_Recurrent
    isValid: boolean
    errorMessage: string
  }
  priority: {
    config: Input_New_Task_Priority
    isValid: boolean
    errorMessage: string
  }
}

//* Form Interfaces
export interface Form_New_Task {
  title: Input_New_Task_Title
  day: Input_New_Task_Day
  hour: Input_New_Task_Hour
  recurrent: Input_New_Task_Recurrent
  priority: Input_New_Task_Priority
}
export interface Form_Email {
  email: string
  password: string
}
export interface Form_Validations extends Form_New_Task, Form_Email { }
