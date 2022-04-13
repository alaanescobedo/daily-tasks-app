import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskCard as TaskCardComponent, TaskCardProps } from './TaskCard'

const TaskCardStory: ComponentMeta<typeof TaskCardComponent> = {
  title: 'Card/Tasks',
  component: TaskCardComponent
}
export default TaskCardStory

const Template: ComponentStory<typeof TaskCardComponent> = (args) => <TaskCardComponent {...args} />

export const Tasks = Template.bind({})
const TaskCardArgs: TaskCardProps = {
  day: 'Monday',
  tasks: [],
  navigateTo: '/'
}
Tasks.args = TaskCardArgs
