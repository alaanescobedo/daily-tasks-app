import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Route, Routes } from 'react-router-dom'
import { Activities as ActivitiesComponent } from './Activities.view'

const ActivitiesStory: ComponentMeta<typeof ActivitiesComponent> = {
  title: 'Views/Activities',
  component: ActivitiesComponent,
  decorators: [(Story) => (
    <Routes>
      <Route path='/activities/:day' element={<Story />} />
    </Routes>
  )]
}
export default ActivitiesStory

const Template: ComponentStory<typeof ActivitiesComponent> = () => <ActivitiesComponent />

export const Activities = Template.bind({})
