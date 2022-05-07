import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MainCard as MainCardComponent, MainCardProps } from './MainCard'

const MainCardStory: ComponentMeta<typeof MainCardComponent> = {
  title: 'Card/Main',
  component: MainCardComponent
}
export default MainCardStory

const Template: ComponentStory<typeof MainCardComponent> = (args) => <MainCardComponent {...args} />

export const Main = Template.bind({})
const MainCardArgs: MainCardProps = {
  currentDate: 'Wednesday, 04-11-2022',
  username: 'Guest'
}
Main.args = MainCardArgs
