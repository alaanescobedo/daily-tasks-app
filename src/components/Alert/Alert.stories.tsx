import { IconProps } from '@components/Icons/Icon'
import { Close, Inherit } from '@components/Icons/Icon.stories'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert as AlertComponent, AlertProps } from './Alert'
import { options } from './Alert.config'

const AlertStory: ComponentMeta<typeof AlertComponent> = {
  title: 'Alert/Alert',
  component: AlertComponent,
  argTypes: {
    status: {
      defaultValue: options.status[0],
      description: options.status.join(' | '),
      control: { type: 'select', options: options.status },
      type: 'string'
    },
    className: {
      defaultValue: null,
      control: false,
      description: 'className',
      type: 'string',
      name: 'className'
    },
    children: { control: 'text' }
  }
}
export default AlertStory

const Template: ComponentStory<typeof AlertComponent> = (args) => <AlertComponent {...args} />

export const Status = Template.bind({})
const alertArgs: AlertProps = {
  children: 'This is my alert message',
  status: 'success'
}
Status.args = alertArgs

export const WithIcon = Template.bind({})
const withIconArgs: AlertProps = {
  children: 'This is my alert message',
  status: 'success',
  prepend: <Inherit {...Inherit.args as IconProps} />
}
WithIcon.args = withIconArgs

export const WithClose = Template.bind({})
const withCloseArgs: AlertProps = {
  children: 'This is my alert message',
  status: 'success',
  append: <Close {...Close.args as IconProps} />
}
WithClose.args = withCloseArgs
