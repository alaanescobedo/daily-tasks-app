import styles from './Activities.module.css'

export const ActivitiesCard = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Activities</h1>
      <ul className={styles.list}>
        <li>Terminar el frontend</li>
        <li>Aprender a documentar la api</li>
        <li>Dockerizar node en el backend</li>
        <li>Implementar storybooks</li>
        <li>Invadir polonia</li>
        <li>ʕ•́ᴥ•̀ʔっayo!</li>
      </ul>
      <div className={styles.date_container}>
        <p className={styles.date}>Tommorrow</p>
      </div>
    </div>
  )
}
