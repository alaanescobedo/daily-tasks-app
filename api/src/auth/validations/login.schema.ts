import { InferType, object, SchemaOf, string } from 'yup'
import type { LoginUserClientData } from '@auth/auth.interfaces'

const loginSchema: SchemaOf<LoginUserClientData> = object({
  password: string().min(8).required(),
  email: string().email().required()
})

export interface TaskValidation extends InferType<typeof loginSchema> { }
export default loginSchema
