import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SigninView as SigninViewComponent } from './Signin.view'

const SigninViewStory: ComponentMeta<typeof SigninViewComponent> = {
  title: 'Views/Signin',
  component: SigninViewComponent
}
export default SigninViewStory

const Template: ComponentStory<typeof SigninViewComponent> = () => <SigninViewComponent />

export const Signin = Template.bind({})
