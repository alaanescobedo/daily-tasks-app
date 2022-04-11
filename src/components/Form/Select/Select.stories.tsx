import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select, InputSelectProps } from './Select'

const InputSelectStory: ComponentMeta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select
}
export default InputSelectStory

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const PrioritySelect = Template.bind({})
const prioritySelectArgs: InputSelectProps = {
  id: 'priority',
  defaultValue: 'medium',
  handleChange: () => { },
  options: [
    { id: 'low', label: 'Low' },
    { id: 'medium', label: 'Medium' },
    { id: 'high', label: 'High' }
  ]
}
PrioritySelect.args = prioritySelectArgs

export const DateSelect = Template.bind({})
const dateSelectArgs: InputSelectProps = {
  id: 'date',
  defaultValue: 'friday',
  handleChange: () => { },
  options: [
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' },
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' }
  ]
}
DateSelect.args = dateSelectArgs
