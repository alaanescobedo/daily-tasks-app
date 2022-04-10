interface Input_New_Task_Title {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
  maxLength: number
  value: string
}
interface Input_New_Task_Day {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
  defaultValue: string
}
interface Input_New_Task_Hour {
  id: string
  label: string
  type: string
  required: boolean
}
interface Input_New_Task_Recurrent {
  id: string
  label: string
  type: string
  defaultValue: boolean
}
type Task_Priority = 'Low' | 'Medium' | 'High'
type Task_Priority_Id = Lowercase<Task_Priority>

interface Input_New_Task_Priority_Options {
  id: Task_Priority_Id
  label: Task_Priority
}
interface Input_New_Task_Priority {
  id: string
  label: string
  type: string
  defaultValue: string
  options: Input_New_Task_Priority_Options[]
}

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
