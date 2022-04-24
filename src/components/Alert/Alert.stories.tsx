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
    children: { control: 'text' },
    prepend: { type: 'string' },
    append: { type: 'string' }
  }
}
export default AlertStory

export const Base: ComponentStory<typeof Alert> = (args) => <Alert {...args} />
Base.args = { children: 'This is my alert message', variant: 'default' }

export const Status = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {options.status.map((status) => (
        <Alert key={status} status={status}>
          This is my {status} alert message
        </Alert>
      ))}
    </li>
  </>
)

export const Variants = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      {options.variants.map((variant) => (
        <Alert key={variant} status='success' variant={variant}>
          This is my {variant} alert message
        </Alert>
      ))}
    </li>
  </>
)

export const withIcons = (): JSX.Element => (
  <>
    <li style={{ display: 'flex', gap: '1.4rem', flexDirection: 'column' }}>
      <Alert status='success' prepend={<Icon icon='check' />}>
        This is my alert message
      </Alert>
      <Alert status='warning' append={<Icon icon='close' isClickable />} prepend={<Icon icon='exclamative' />}>
        This is my alert message
      </Alert>
      <Alert status='error' append={<Icon icon='close' isClickable />}>
        This is my alert message
      </Alert>
    </li>
  </>
)
