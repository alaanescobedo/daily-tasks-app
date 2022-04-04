import { CSSProperties, useContext } from 'react'
import { ThemeContext } from './context'

import { AppRouter } from './routes/AppRoutes'

import styles from './App.module.css'
import { AuthRoutes } from './routes/AuthRoutes'

function App (): JSX.Element {
  const { generalConfiguration, theme } = useContext(ThemeContext)
  const configVariables = { ...generalConfiguration, ...theme }
  return (
    <div className={styles.app} style={{ ...configVariables as CSSProperties }}>
      <div className={styles.container}>
        <AuthRoutes />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
