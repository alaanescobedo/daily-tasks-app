import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input as InputComponent, InputProps } from './Input'

const InputStory: ComponentMeta<typeof InputComponent> = {
  title: 'Form/Auth',
  component: InputComponent
}
export default InputStory

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />

export const Input = Template.bind({})
const emailArgs: InputProps = {
  type: 'email',
  id: 'email',
  handleChange: () => { }
}
Input.args = emailArgs
