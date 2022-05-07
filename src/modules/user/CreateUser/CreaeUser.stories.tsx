import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreateUserView as CreateUserViewComponent } from './CreateUser.view'

const CreateUserViewStory: ComponentMeta<typeof CreateUserViewComponent> = {
  title: 'Views/Create User',
  component: CreateUserViewComponent
}
export default CreateUserViewStory

const Template: ComponentStory<typeof CreateUserViewComponent> = () => <CreateUserViewComponent />

export const CreateUser = Template.bind({})
