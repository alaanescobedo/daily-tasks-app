import { CSSProperties, useContext } from 'react'
import { ThemeContext } from './context'

import { AppRouter } from './routes/App.route'

import styles from './App.module.css'

function App (): JSX.Element {
  const { generalConfiguration, theme } = useContext(ThemeContext)
  const configVariables = { ...generalConfiguration, ...theme }
  return (
    <div className={styles.app} style={{ ...configVariables as CSSProperties }}>
      <div className={styles.container}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
