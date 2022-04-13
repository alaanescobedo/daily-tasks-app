import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NewTaskFormLayout as NewTaskFormLayoutComponent, NewTaskFormLayoutProps } from './NewTaskFormLayout'

const NewTaskFormLayoutStory: ComponentMeta<typeof NewTaskFormLayoutComponent> = {
  title: 'Layout/New Task Form',
  component: NewTaskFormLayoutComponent
}
export default NewTaskFormLayoutStory

const Template: ComponentStory<typeof NewTaskFormLayoutComponent> = (args) => <NewTaskFormLayoutComponent {...args} />

export const NewTaskForm = Template.bind({})
const NewTaskFormLayoutArgs: NewTaskFormLayoutProps = {
  children: (
    <span style={{ color: 'white', gridColumn: '1 / -1', textAlign: 'center' }}>
      ʕ•́ᴥ•̀ʔっayo!
    </span>
  ),
  handleSubmit: () => { },
  title: 'New Task'
}
NewTaskForm.args = NewTaskFormLayoutArgs
