import styles from './AuthLayout.module.css'

export interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AuthLayout = ({ children, title, handleSubmit }: AuthLayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.container_heading}>
        <h1 className={styles.heading}>
          {title}
        </h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
        <div className={styles.btn_container}>
          <button className={styles.btn_continue}>Continue</button>
        </div>
      </form>
    </div>
  )
}
