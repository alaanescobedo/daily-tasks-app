import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { TextArea, TextAreaProps } from './TextArea'

const InputTextAreaStory: ComponentMeta<typeof TextArea> = {
  title: 'Form/Textarea',
  component: TextArea
}
export default InputTextAreaStory

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState(args.value ?? '')

  return (
    <TextArea
      {...args}
      handleChange={(e) => {
        args.handleChange(e)
        setValue(() => e.target.value)
      }}
      value={value}
    />
  )
}

export const Primary = Template.bind({})
const primaryArgs: TextAreaProps = {
  id: 'textarea',
  handleChange: () => { },
  value: '',
  placeholder: 'Title',
  maxLength: 70
}
Primary.args = primaryArgs
