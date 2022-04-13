import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppContainerLayout as AppContainerLayoutComponent, AppContainerLayoutProps } from './AppContainerLayout'

import styles from '../../App.module.css'

const AppContainerStory: ComponentMeta<typeof AppContainerLayoutComponent> = {
  title: 'Layout/App Container',
  component: AppContainerLayoutComponent
}
export default AppContainerStory

const Template: ComponentStory<typeof AppContainerLayoutComponent> = (args) => (
  <span className={styles.app_container}>
    <AppContainerLayoutComponent {...args} />
  </span>
)

export const AppContainer = Template.bind({})
const AppContainerArgs: AppContainerLayoutProps = {
  children: <span style={{ color: 'white', flex: '1' }}>ʕ•́ᴥ•̀ʔっayo!</span>
}
AppContainer.args = AppContainerArgs
