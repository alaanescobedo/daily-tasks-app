import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input as InputComponent } from './InputGroup'

const InputStory: ComponentMeta<typeof InputComponent> = {
  title: 'Form/Input',
  component: InputComponent,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
}
export default InputStory

export const Base: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />
