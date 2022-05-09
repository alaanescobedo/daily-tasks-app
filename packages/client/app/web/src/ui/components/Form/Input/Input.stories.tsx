import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputGroup as InputComponent } from './InputGroup'

const InputStory: ComponentMeta<typeof InputComponent> = {
  title: 'Form/Input',
  component: InputComponent,
  argTypes: {
  }
}
export default InputStory

export const Base: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />
