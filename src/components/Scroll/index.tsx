import styles from './Scroll.module.css'
interface Props {
  children: React.ReactNode
}

export const Scroll = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
