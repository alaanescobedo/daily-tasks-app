import { CSSProperties, useContext } from "react"

import { MainCard, TaskCard } from "./components/Card"
import { ThemeContext } from "./context"

import styles from './App.module.css'

function App() {
  const { generalConfiguration, theme } = useContext(ThemeContext)
  const configVariables = { ...generalConfiguration, ...theme }
  return (
    <div className={styles.app} style={{ ...configVariables as CSSProperties }}>
      <div className={styles.container}>
        <MainCard />
        <TaskCard />

      </div>
    </div>
  )
}

export default App
