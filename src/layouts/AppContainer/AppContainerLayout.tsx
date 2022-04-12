import { NavLink } from 'react-router-dom'
import { MainCard } from '@components/index'
import styles from './AppContainerLayout.module.css'

export interface AppContainerLayoutProps {
  children: React.ReactNode
}

export const AppContainerLayout = ({ children }: AppContainerLayoutProps): JSX.Element => {
  return (
    <>
      <MainCard />
      <div className={styles.super_container}>
        <div className={styles.container}>
          {children}
        </div>
        <div className={styles.return_container}>
          <NavLink to='/' className={styles.return}>
            Return
          </NavLink>
        </div>
      </div>
    </>
  )
}
