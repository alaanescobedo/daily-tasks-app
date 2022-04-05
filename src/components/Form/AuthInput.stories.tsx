import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AuthInput } from './AuthInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
/* eslint-disable @typescript-eslint/consistent-type-assertions */
export default {
  title: 'Inputs',
  component: AuthInput
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AuthInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthInput> = (args) => <AuthInput {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Email',
  type: 'email',
  name: 'email'
}
