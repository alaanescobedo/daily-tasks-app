import { InferType, object, SchemaOf, string } from 'yup'
import type { ResetPasswordClientData } from '@auth/auth.interfaces'

const passwordSchema: SchemaOf<ResetPasswordClientData> = object({
  password:
    string()
      .min(8)
      .required()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      )
})

export interface PasswordValidation extends InferType<typeof passwordSchema> { }
export default passwordSchema
