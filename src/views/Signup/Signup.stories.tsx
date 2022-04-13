import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignupView as SignupViewComponent } from './Signup.view'

const SignupViewStory: ComponentMeta<typeof SignupViewComponent> = {
  title: 'Views/Signup',
  component: SignupViewComponent
}
export default SignupViewStory

const Template: ComponentStory<typeof SignupViewComponent> = () => <SignupViewComponent />

export const Signup = Template.bind({})
