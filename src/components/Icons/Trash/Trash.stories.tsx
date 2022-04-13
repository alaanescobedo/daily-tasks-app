import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TrashIcon as TrashIconComponent } from './Trash'

const TrashIconStory: ComponentMeta<typeof TrashIconComponent> = {
  title: 'Icon/Trash',
  component: TrashIconComponent
}
export default TrashIconStory

const Template: ComponentStory<typeof TrashIconComponent> = () => (
  <div style={{ width: '80px' }}>
    <TrashIconComponent />
  </div>
)

export const Trash = Template.bind({})
