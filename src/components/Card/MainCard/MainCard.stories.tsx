import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getCurrentDate } from '@utils/getCurrentDate'

import { MainCard as MainCardComponent, MainCardProps } from './MainCard'

const MainCardStory: ComponentMeta<typeof MainCardComponent> = {
  title: 'Card/Main',
  component: MainCardComponent
}
export default MainCardStory

const Template: ComponentStory<typeof MainCardComponent> = (args) => <MainCardComponent {...args} />

export const Main = Template.bind({})
const MainCardArgs: MainCardProps = {
  currentDate: getCurrentDate().split(',').slice(0, 1).join(','),
  username: 'Guest'
}
Main.args = MainCardArgs
