import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Task } from '@hooks'

import { ListTasks as ListTasksComponent, ListTasksProps } from './ListTasks'

const ListTasksStory: ComponentMeta<typeof ListTasksComponent> = {
  title: 'Inputs/ListTasks',
  component: ListTasksComponent
}
export default ListTasksStory

const Template: ComponentStory<typeof ListTasksComponent> = (args) => <ListTasksComponent {...args} />
export const tasks: { [key: string]: Task[] } = {
  '2022-04-11': [
    {
      title: 'Task 1',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-11',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-12': [
    {
      title: 'Task 2',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-12',
      status: 'Pending',
      userID: 'user123'
    }, {
      title: 'Task 3',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-12',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-13': [
    {
      title: 'Task 4',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-13',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-14': [
    {
      title: 'Task 5',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-14',
      status: 'Pending',
      userID: 'user123'
    }
  ],
  '2022-04-15': [
    {
      title: 'Task 6',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-15',
      status: 'Pending',
      userID: 'user123'
    }
  ]
}

export const ListOfTasks = Template.bind({})
const listTasksArgs: ListTasksProps = {
  tasks
}
ListOfTasks.args = listTasksArgs
