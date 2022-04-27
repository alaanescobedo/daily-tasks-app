import { InferType, object, SchemaOf, string } from 'yup'
export interface UsernameClientData {
  username: string
}

const usernameSchema: SchemaOf<UsernameClientData> = object({
  username: string()
    .min(3)
    .max(15)
    .required()
    .matches(/^[A-Za-z][A-Za-z0-9_]{6,14}$/,
      'Must be between 6 and 14 characters and can only contain letters, numbers and underscores'
    )
})

export interface UsernameValidation extends InferType<typeof usernameSchema> { }
export default usernameSchema
