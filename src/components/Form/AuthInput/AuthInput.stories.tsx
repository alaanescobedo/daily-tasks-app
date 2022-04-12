import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AuthInput, InputAuthProps } from './AuthInput'

const AuthInputStory: ComponentMeta<typeof AuthInput> = {
  title: 'Form/Auth',
  component: AuthInput
}
export default AuthInputStory

const Template: ComponentStory<typeof AuthInput> = (args) => <AuthInput {...args} />

export const Email = Template.bind({})
const emailArgs: InputAuthProps = {
  label: 'Email',
  type: 'email',
  name: 'email'
}
Email.args = emailArgs
