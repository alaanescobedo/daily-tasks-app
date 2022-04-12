import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputSelectProps } from '../Select/Select'
import { DateSelect, PrioritySelect } from '../Select/Select.stories'

import { InputGroup, InputGroupProps } from './InputGroup'
import { InputTime } from '../Time/Time.stories'
import { InputTimeProps } from '../Time/Time'
import { InputCheckbox } from '../Checkbox/Checkbox.stories'
import { InputCheckboxProps } from '../Checkbox/Checkbox'
import styles from '@views/NewTask/NewTask.module.css'

const InputGroupStory: ComponentMeta<typeof InputGroup> = {
  title: 'Inputs/InputGroup',
  component: InputGroup
}
export default InputGroupStory

const Template: ComponentStory<typeof InputGroup> = (args) => <InputGroup {...args} />

export const GroupDate = Template.bind({})
const groupDateArgs: InputGroupProps = {
  children: <DateSelect {...DateSelect.args as InputSelectProps} />,
  label: 'Date',
  htmlFor: 'date',
  className: styles.group_date_day
}
GroupDate.args = groupDateArgs

export const GroupHour = Template.bind({})
const groupHourArgs: InputGroupProps = {
  children: <InputTime {...InputTime.args as InputTimeProps} />,
  label: 'Hour',
  htmlFor: 'time',
  className: styles.group_date_hour
}
GroupHour.args = groupHourArgs

export const GroupCheckbox = Template.bind({})
const groupCheckboxArgs: InputGroupProps = {
  children: <InputCheckbox {...InputCheckbox.args as InputCheckboxProps} />,
  label: 'Recurrent',
  htmlFor: 'recurrent',
  className: styles.group_recurrent
}
GroupCheckbox.args = groupCheckboxArgs

export const GroupPriority = Template.bind({})
const groupPriorityArgs: InputGroupProps = {
  children: <PrioritySelect {...PrioritySelect.args as InputSelectProps} />,
  label: 'Priority',
  htmlFor: 'priority',
  className: styles.group_priority
}
GroupPriority.args = groupPriorityArgs
