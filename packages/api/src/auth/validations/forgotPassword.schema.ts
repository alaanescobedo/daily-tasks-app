import { InferType, object, SchemaOf, string } from 'yup'
import type { ForgotPasswordClientData } from '@auth/auth.interfaces'

const forgotPasswordSchema: SchemaOf<ForgotPasswordClientData> = object({
  email: string().email().required()
})

export interface TaskValidation extends InferType<typeof forgotPasswordSchema> { }
export default forgotPasswordSchema
