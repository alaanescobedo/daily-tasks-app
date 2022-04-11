import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AuthInput } from './AuthInput'

const AuthInputStory: ComponentMeta<typeof AuthInput> = {
  title: 'Inputs/Auth',
  component: AuthInput
}
export default AuthInputStory

const Template: ComponentStory<typeof AuthInput> = (args) => <AuthInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Email',
  type: 'email',
  name: 'email'
}
