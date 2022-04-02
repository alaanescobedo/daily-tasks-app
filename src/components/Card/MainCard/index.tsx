import styles from './MainCard.module.css'

export const MainCard = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h4 className={styles.username}>Username</h4>
      <h4 className={styles.date}>20-04-2022</h4>
    </div>
  )
}
