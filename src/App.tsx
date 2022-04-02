import { CSSProperties, useContext } from 'react'

import { MainCard } from './components/Card'
import { ThemeContext } from './context'

import styles from './App.module.css'
import { Tasks } from './components/Scroll'
import { Button } from './components/Button/Button'

function App (): JSX.Element {
  const { generalConfiguration, theme } = useContext(ThemeContext)
  const configVariables = { ...generalConfiguration, ...theme }
  return (
    <div className={styles.app} style={{ ...configVariables as CSSProperties }}>
      <div className={styles.container}>
        <MainCard />
        <Tasks />
        <Button />
      </div>
    </div>
  )
}

export default App
