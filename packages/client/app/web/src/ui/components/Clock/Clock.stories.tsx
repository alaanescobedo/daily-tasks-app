import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Clock as ClockComponent } from './Clock'

const ClockStory: ComponentMeta<typeof ClockComponent> = {
  title: 'Clock/Clock',
  component: ClockComponent
}
export default ClockStory

const Template: ComponentStory<typeof ClockComponent> = () => <ClockComponent />

export const Clock = Template.bind({})
