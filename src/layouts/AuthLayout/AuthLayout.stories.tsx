import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AuthLayout as AuthLayoutComponent, AuthLayoutProps } from './AuthLayout'

const AuthLayoutStory: ComponentMeta<typeof AuthLayoutComponent> = {
  title: 'Layout/Auth Layout',
  component: AuthLayoutComponent
}
export default AuthLayoutStory

const Template: ComponentStory<typeof AuthLayoutComponent> = (args) => <AuthLayoutComponent {...args} />

export const AuthLayout = Template.bind({})
const AuthLayoutArgs: AuthLayoutProps = {
  children: <span style={{ color: 'white', flex: '1' }}>ʕ•́ᴥ•̀ʔっayo!</span>,
  navigateTo: '/',
  title: 'AuthLayout'
}
AuthLayout.args = AuthLayoutArgs
