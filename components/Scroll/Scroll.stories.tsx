import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListTasksProps } from '@components/List/ListTasks'
import { ListOfTasks } from '@components/List/ListTasks/ListTasks.stories'

import { Scroll as ScrollComponent, ScrollProps } from './Scroll'

const ScrollStory: ComponentMeta<typeof ScrollComponent> = {
  title: 'Scroll/Scroll',
  component: ScrollComponent
}
export default ScrollStory

const Template: ComponentStory<typeof ScrollComponent> = (args) => <ScrollComponent {...args} />

export const Scroll = Template.bind({})
const scrollProps: ScrollProps = {
  children: <ListOfTasks {...ListOfTasks.args as ListTasksProps} />
}
Scroll.args = scrollProps
