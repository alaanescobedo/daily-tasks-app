import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListActivities as ListActivitiesComponent, ListActivitiesProps } from './ListActivities'

const ListActivitiesStory: ComponentMeta<typeof ListActivitiesComponent> = {
  title: 'List/List Of Activities',
  component: ListActivitiesComponent
}
export default ListActivitiesStory

const Template: ComponentStory<typeof ListActivitiesComponent> = (args) => <ListActivitiesComponent {...args} />

export const ListOfActivities = Template.bind({})
const ListActivitiesArgs: ListActivitiesProps = {
  day: '2022-04-11',
  tasks: [
    {
      title: 'Task 1',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-11',
      status: 'Pending',
      userID: 'user123'
    },
    {
      title: 'Task 2',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-11',
      status: 'Pending',
      userID: 'user123'
    }
  ]
}
ListOfActivities.args = ListActivitiesArgs
