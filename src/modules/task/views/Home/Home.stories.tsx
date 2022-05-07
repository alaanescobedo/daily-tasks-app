import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomeView as HomeViewComponent } from './Home.view'

const HomeViewStory: ComponentMeta<typeof HomeViewComponent> = {
  title: 'Views/Home',
  component: HomeViewComponent
}
export default HomeViewStory

const Template: ComponentStory<typeof HomeViewComponent> = () => <HomeViewComponent />

export const Home = Template.bind({})
