import { useNavigate } from 'react-router-dom'

import styles from './AuthLayout.module.css'

export interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  navigateTo: string
}

export const AuthLayout = ({ children, title, navigateTo }: AuthLayoutProps): JSX.Element => {
  const navigate = useNavigate()

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    navigate(navigateTo)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_heading}>
        <h1 className={styles.heading}>
          {title}
        </h1>
      </div>
      <form className={styles.form} onSubmit={handleSignup}>
        {children}
        <div className={styles.btn_container}>
          <button className={styles.btn_continue}>Continue</button>
        </div>
      </form>
    </div>
  )
}
