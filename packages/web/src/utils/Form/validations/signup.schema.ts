import { InferType, object, SchemaOf, string } from 'yup'
export interface SignupUserClientData {
  email: string
  password: string
  passwordConfirm: string
}

const signupSchema: SchemaOf<SignupUserClientData> = object({
  email:
    string()
      .email()
      .required(),
  password:
    string()
      .min(8)
      .required()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  passwordConfirm:
    string()
      .min(8)
      .required()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      })
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must One Uppercase, One Lowercase, One Number and One Special Case Character'
      )
})

export interface SignupValidation extends InferType<typeof signupSchema> { }
export default signupSchema
