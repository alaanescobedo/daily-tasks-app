import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Task } from '../../hooks/useTasks'

import { ListTasks as ListTasksComponent, ListTasksProps } from './ListTasks'

const ListTasksStory: ComponentMeta<typeof ListTasksComponent> = {
  title: 'Inputs/List',
  component: ListTasksComponent
}
export default ListTasksStory

const Template: ComponentStory<typeof ListTasksComponent> = (args) => <ListTasksComponent {...args} />
const tasks: { [key: string]: Task[] } = {
  '2022-04-11': [
    {
      title: 'Task 1',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: new Date(Date.now() + 3 * 1000 * 60 * 60 * 24).toISOString(),
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-12': [
    {
      title: 'Task 2',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: new Date(Date.now() + 1 * 1000 * 60 * 60 * 24).toISOString(),
      status: 'Pending',
      userID: 'user123'
    }, {
      title: 'Task 3',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: new Date(Date.now() + 1 * 1000 * 60 * 60 * 24).toISOString(),
      status: 'Pending',
      userID: 'user123'
    }
  ]
}

export const ListTasks = Template.bind({})
const listTasksArgs: ListTasksProps = {
  tasks
}
ListTasks.args = listTasksArgs
