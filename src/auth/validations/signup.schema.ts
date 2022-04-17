import { InferType, object, SchemaOf, string } from 'yup'
import type { SignupUserClientData } from '@auth/auth.interfaces'

const signupSchema: SchemaOf<SignupUserClientData> = object({
  username:
    string()
      .min(3)
      .max(15)
      .required()
      .matches(/^[A-Za-z][A-Za-z0-9_]{6,14}$/,
        'Username must be between 6 and 14 characters and can only contain letters, numbers and underscores'
      ),
  email:
    string()
      .email()
      .required(),
  password:
    string()
      .min(8)
      .required()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      )
})

export interface TaskValidation extends InferType<typeof signupSchema> { }
export default signupSchema
