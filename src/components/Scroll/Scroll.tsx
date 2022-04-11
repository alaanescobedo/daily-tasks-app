import styles from './Scroll.module.css'

export interface ScrollProps {
  children: React.ReactNode
}

export const Scroll = ({ children }: ScrollProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
