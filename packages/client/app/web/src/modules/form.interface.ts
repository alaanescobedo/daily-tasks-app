//* Types
type Task_Priority = 'Low' | 'Medium' | 'High'
type Task_Priority_Id = Lowercase<Task_Priority>
export type Input_Types = HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
type Event_Change_Types = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | Input_Types>

//* Input Base
export interface Input_Base extends HTMLInputElement {
  isInvalid?: boolean
}

//* Input Auth Interfaces
export interface Input_Email extends Input_Base {

}
export interface Input_Password extends Input_Base { }
export interface Input_Username extends Input_Base { }

//*  Fields Values New Task
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

// ? Forms
//* Form New Task Interfaces
export interface Form_New_Task {
  title: any
  day: any
  hour: any
  recurrent: any
  priority: any
}
//* Form Auth Signup Interfaces
export interface Form_Auth_Signup {
  email: Input_Email
  password: Input_Password
  passwordConfirm: Input_Password
}
//* Form Auth Signin Interfaces
export interface Form_Auth_Signin {
  email: Input_Email
  password: Input_Password
}
//* Form Create Username
export interface Form_Create_Username {
  username: Input_Username
}
//* Form Forgot Password
export interface Form_Forgot_Password {
  email: Input_Email
}
export interface Form_Reset_Password {
  password: Input_Password
}

export type Forms = Partial<Form_New_Task> & Partial<Form_Auth_Signup> & Partial<Form_Create_Username>

//* Form Errors
export interface ErrorMessage { errorMessage: string }
export type Form_Errors<T extends Forms> = {
  [K in keyof T]: ErrorMessage
}
