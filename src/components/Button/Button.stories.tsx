import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button as ButtonComponent, ButtonProps } from './Button'

const ButtonStory: ComponentMeta<typeof ButtonComponent> = {
  title: 'Button/Add Task',
  component: ButtonComponent
}
export default ButtonStory

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />

export const AddTask = Template.bind({})
const emailArgs: ButtonProps = {
  label: 'Add Task'
}
AddTask.args = emailArgs
