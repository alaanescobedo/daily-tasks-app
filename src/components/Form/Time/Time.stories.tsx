import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InputTimeProps, Time } from './Time'

const InputTimeStory: ComponentMeta<typeof Time> = {
  title: 'Inputs/Time',
  component: Time
}
export default InputTimeStory

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />

export const InputTime = Template.bind({})
const InputTimeArgs: InputTimeProps = {
  id: 'time',
  defaultValue: '12:00',
  handleChange: () => { }
}
InputTime.args = InputTimeArgs
