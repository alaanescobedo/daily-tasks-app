import { ComponentStory, ComponentMeta } from '@storybook/react'
import { tasks } from '../../../config/test-tasks'

import { ListTasks as ListTasksComponent, ListTasksProps } from './ListTasks'

const ListTasksStory: ComponentMeta<typeof ListTasksComponent> = {
  title: 'List/List Of Tasks',
  component: ListTasksComponent
}
export default ListTasksStory

const Template: ComponentStory<typeof ListTasksComponent> = (args) => <ListTasksComponent {...args} />

export const ListOfTasks = Template.bind({})
const listTasksArgs: ListTasksProps = {
  tasks
}
ListOfTasks.args = listTasksArgs
