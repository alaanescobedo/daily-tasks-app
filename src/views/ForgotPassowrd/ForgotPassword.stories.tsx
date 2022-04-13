import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ForgotPasswordView as ForgotPasswordViewComponent } from './ForgotPassword.view'

const ForgotPasswordViewStory: ComponentMeta<typeof ForgotPasswordViewComponent> = {
  title: 'Views/Forgot Password',
  component: ForgotPasswordViewComponent
}
export default ForgotPasswordViewStory

const Template: ComponentStory<typeof ForgotPasswordViewComponent> = () => <ForgotPasswordViewComponent />

export const ForgotPassword = Template.bind({})
