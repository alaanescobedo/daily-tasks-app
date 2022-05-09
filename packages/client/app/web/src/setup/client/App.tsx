import { UserProvider } from '@modules/user/state'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@setup/routes'
import styles from './App.module.css'

function App (): JSX.Element {
  return (
    <div className={styles.app_bg}>
      <div className={styles.app_container}>
        <BrowserRouter>
          <UserProvider>
            <AppRouter />
          </UserProvider>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
