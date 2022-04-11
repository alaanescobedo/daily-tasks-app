import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListTasksProps } from '../List/ListTasks'
import { ListTasks } from '../List/ListTasks.stories'

import { Scroll as ScrollComponent, ScrollProps } from './Scroll'

const ScrollStory: ComponentMeta<typeof ScrollComponent> = {
  title: 'Layout/Scroll',
  component: ScrollComponent
}
export default ScrollStory

const Template: ComponentStory<typeof ScrollComponent> = (args) => <ScrollComponent {...args} />

export const Scroll = Template.bind({})
const scrollProps: ScrollProps = {
  children: <ListTasks {...ListTasks.args as ListTasksProps} />
}
Scroll.args = scrollProps
