import { AppRouter, AuthRoutes } from '@routes'
import { TaskProvider } from '@context/Task'

import styles from './App.module.css'

function App (): JSX.Element {
  return (
    <div className={styles.app_bg}>
      <div className={styles.app_container}>
        <AuthRoutes />
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
