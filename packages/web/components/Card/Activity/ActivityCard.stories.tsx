import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ActivityCard as ActivityCardComponent, ActivityCardProps } from './ActivityCard'

const ActivityCardStory: ComponentMeta<typeof ActivityCardComponent> = {
  title: 'Card/Activity',
  component: ActivityCardComponent
}
export default ActivityCardStory

const Template: ComponentStory<typeof ActivityCardComponent> = (args) => <ActivityCardComponent {...args} />

export const Activity = Template.bind({})
const ActivityArgs: ActivityCardProps = {
  title: 'Aprender Three.js'
}
Activity.args = ActivityArgs
