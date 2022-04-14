import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@routes'
import styles from './App.module.css'

function App (): JSX.Element {
  return (
    <div className={styles.app_bg}>
      <div className={styles.app_container}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
