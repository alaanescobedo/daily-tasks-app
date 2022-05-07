import styles from './AuthLayout.module.css'

export interface AuthLayoutProps {
  children: React.ReactNode
  // title: string
}

export const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.container_heading}>
        <h1 className={styles.heading}>
          {title}
        </h1>
      </div> */}
      {children}
    </div>
  )
}
