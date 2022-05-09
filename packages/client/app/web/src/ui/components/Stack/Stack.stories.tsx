import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack } from './Stack'

const StackStory: ComponentMeta<typeof Stack> = {
  title: 'Stack',
  component: Stack,
  argTypes: {
    vertical: {
      control: {
        type: 'boolean'
      },
      description: 'Stack items vertically or horizontally',
      defaultValue: false
    },
    gap: {
      control: {
        type: 'text'
      },
      description: 'The gap between items',
      defaultValue: '1rem'
    },
    noWrap: {
      control: {
        type: 'boolean'
      },
      description: 'Wrap stack elements to additional rows as needed on small screens (Defaults to true)',
      defaultValue: true
    },
    className: { table: { disable: true } }
  }
}
export default StackStory

export const Base: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>1</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>2</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>3</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>4</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>5</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>6</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>7</div>
    <div style={{ color: 'white', padding: '1rem 4rem', backgroundColor: 'tomato' }}>8</div>
  </Stack>
)
