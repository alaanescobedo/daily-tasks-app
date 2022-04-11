import { ComponentMeta, Story } from '@storybook/react'

import { TextArea, TextAreaProps } from './TextArea'

const InputTextAreaStory: ComponentMeta<typeof TextArea> = {
  title: 'Inputs/Textarea',
  component: TextArea
}
export default InputTextAreaStory

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Primary = Template.bind({})
const primaryArgs: TextAreaProps = {
  id: 'textarea',
  handleChange: () => { },
  value: '',
  placeholder: 'Title',
  maxLength: 70
}
Primary.args = primaryArgs
