import { ComponentStory, ComponentMeta } from '@storybook/react'
import { tasks } from '../../components/List/ListTasks/ListTasks.stories'
import { Activities as ActivitiesComponent } from './Activities.view'

const ActivitiesStory: ComponentMeta<typeof ActivitiesComponent> = {
  title: 'Views/Activities',
  component: ActivitiesComponent
}
export default ActivitiesStory

const Template: ComponentStory<typeof ActivitiesComponent> = () => <ActivitiesComponent />

export const Activities = Template.bind({})
Activities.args = {
  tasks: tasks['2022-04-11'],
  day: '2022-04-11'
}
