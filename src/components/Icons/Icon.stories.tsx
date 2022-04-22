import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from './Icon'
import { icons } from './utils/icons'

const IconStory: ComponentMeta<typeof Icon> = {
  title: 'Icons',
  component: Icon,
  decorators: [
    storyFn => (
      <span style={{ width: '60px' }}>
        {storyFn()}
      </span>
    )
  ],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'This will be called when the button is clicked',
      type: 'function'
    },
    className: {
      defaultValue: null,
      control: false,
      description: 'Classes for the element',
      type: 'string'
    },
    isClickable: {
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
}
export default IconStory

export const Base: ComponentStory<typeof Icon> = (args) => (
  <span style={{ display: 'flex', width: '35px', height: '35px' }}>
    <Icon {...args} />
  </span>
)
Base.args = { icon: 'check', color: 'base' }

export const All = (): JSX.Element => (
  <>
    <p style={{ color: '#fff', fontSize: '20px', margin: '0 0 10px 10px' }}>
      There are {Object.keys(icons).length} icons
    </p>
    <div style={{ width: '90%', margin: '0 auto' }}>
      <li style={{ display: 'flex', gap: '1rem' }}>
        {Object.keys(icons).map((icon) => (
          <span key={icon} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '30px', height: '30px' }}>
              <Icon key={icon} color='base' icon={icon as keyof typeof icons} />
            </span>
            <span style={{ color: '#fff', marginLeft: '4px' }}>- {icon}</span>
          </span>
        ))}
      </li>
    </div>
  </>
)

export const Clickeable = (): JSX.Element => (
  <span style={{ display: 'flex', width: '35px', height: '35px' }}>
    <Icon color='base' icon='close' isClickable />
  </span>
)
