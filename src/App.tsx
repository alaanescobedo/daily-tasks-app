import { AppRouter } from './routes/AppRoutes'
import styles from './App.module.css'
import { AuthRoutes } from './routes/AuthRoutes'

function App (): JSX.Element {
  return (
    <div className={styles.app_bg}>
      <div className={styles.container}>
        <AuthRoutes />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
