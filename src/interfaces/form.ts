//* Types
type Task_Priority = 'Low' | 'Medium' | 'High'
type Task_Priority_Id = Lowercase<Task_Priority>
export type Input_Types_New_Task = HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement

//* Input Base
interface Input_Base {
  id: string
  label: string
  type: string
  required: boolean
}
//* Input New Task Interfaces
interface Input_New_Task_Hour extends Input_Base { }
interface Input_New_Task_Title extends Input_Base {
  placeholder: string
  maxLength: number
  value: string
}
interface Input_New_Task_Day extends Input_Base {
  placeholder: string
  defaultValue: string
}
interface Input_New_Task_Recurrent extends Input_Base {
  defaultValue: boolean
}
interface Input_New_Task_Priority extends Input_Base {
  defaultValue: string
  options: Input_New_Task_Priority_Options[]
}
interface Input_New_Task_Priority_Options {
  id: Task_Priority_Id
  label: Task_Priority
}
//* Input Auth Interfaces
export interface Input_Email extends Input_Base { }
export interface Input_Password extends Input_Base { }
export interface Input_Username extends Input_Base { }

//*  Fields New Task
export interface Input_Fields_New_Task {
  title: Input_New_Task_Title
  day: Input_New_Task_Day
  hour: Input_New_Task_Hour
  recurrent: Input_New_Task_Recurrent
  priority: Input_New_Task_Priority
}
export interface Form_Values_New_Task {
  title: string
  day: string
  hour: string
  recurrent: boolean
  priority: Task_Priority_Id
}
//* Fields Auth
export interface Input_Fields_Auth_Signup {
  email: Input_Email
  password: Input_Password
  passwordConfirm: Input_Password
}
//* Fields Auth Signup

//* Form New Task Interfaces
export interface Form_New_Task {
  title: Input_New_Task_Title
  day: Input_New_Task_Day
  hour: Input_New_Task_Hour
  recurrent: Input_New_Task_Recurrent
  priority: Input_New_Task_Priority
}
//* Form Auth Signup Interfaces
export interface Form_Auth_Signup {
  email: Input_Email
  password: Input_Password
  passwordConfirm: Input_Password
}
