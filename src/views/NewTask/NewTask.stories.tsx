import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NewTaskView as NewTaskViewComponent } from './NewTask.view'

const NewTaskViewStory: ComponentMeta<typeof NewTaskViewComponent> = {
  title: 'Views/New Task',
  component: NewTaskViewComponent
}
export default NewTaskViewStory

const Template: ComponentStory<typeof NewTaskViewComponent> = () => <NewTaskViewComponent />

export const NewTask = Template.bind({})
