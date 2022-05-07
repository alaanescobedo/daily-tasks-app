import { Icon } from '@components/Icons/Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from './Alert'
import { options } from './Alert.config'

const AlertStory: ComponentMeta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    status: {
      defaultValue: options.status[0],
      description: options.status.join(' | '),
      control: { type: 'select', options: options.status },
      type: 'string'
    },
    className: { table: { disable: true } },
    message: { control: 'text' },
    prepend: { type: 'string' },
    append: { type: 'string' }
  }
}
export default AlertStory

export const Base: ComponentStory<typeof Alert> = (args) => <Alert {...args} />
Base.args = { message: 'This is my alert message', variant: 'default' }

export const Status = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {options.status.map((status) => (
        <Alert key={status} status={status} message={`This is my ${status} message`} />
      ))}
    </li>
  </>
)

export const Variants = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {options.variants.map((variant) => (
        <Alert key={variant} status='success' variant={variant} message={`This is my ${variant} message`} />
      ))}
    </li>
  </>
)

export const withIcons = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      <Alert status='success' prepend={<Icon icon='check' />} message='This is my alert message' />
      <Alert status='warning' append={<Icon icon='close' isClickable />} prepend={<Icon icon='exclamative' />} message='This is my alert message' />
      <Alert status='error' append={<Icon icon='close' isClickable />} message='This is my alert message' />
    </li>
  </>
)
