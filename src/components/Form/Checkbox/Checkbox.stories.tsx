import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, InputCheckboxProps } from './Checkbox'

const InputCheckboxStory: ComponentMeta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox
}
export default InputCheckboxStory

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const InputCheckbox = Template.bind({})
const checkboxArgs: InputCheckboxProps = {
  checked: true,
  id: 'recurrent',
  handleCheckbox: () => { }
}
InputCheckbox.args = checkboxArgs
