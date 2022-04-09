import { AppRouter } from './routes/AppRoutes'
import styles from './App.module.css'
import { AuthRoutes } from './routes/AuthRoutes'
import { TaskProvider } from './context/Task/Task.provider'

function App (): JSX.Element {
  return (
    <div className={styles.app_bg}>
      <div className={styles.container}>
        <AuthRoutes />
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
