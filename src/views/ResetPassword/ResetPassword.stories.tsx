import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ResetPasswordView as ResetPasswordViewComponent } from './ResetPassword.view'

const ResetPasswordViewStory: ComponentMeta<typeof ResetPasswordViewComponent> = {
  title: 'Views/Reset Password',
  component: ResetPasswordViewComponent
}
export default ResetPasswordViewStory

const Template: ComponentStory<typeof ResetPasswordViewComponent> = () => <ResetPasswordViewComponent />

export const ResetPassword = Template.bind({})
