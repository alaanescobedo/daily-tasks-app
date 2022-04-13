import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckIcon as CheckIconComponent } from './Check'

const CheckIconStory: ComponentMeta<typeof CheckIconComponent> = {
  title: 'Icon/Check',
  component: CheckIconComponent
}
export default CheckIconStory

const Template: ComponentStory<typeof CheckIconComponent> = () => (
  <div style={{ width: '80px' }}>
    <CheckIconComponent />
  </div>
)

export const Check = Template.bind({})
