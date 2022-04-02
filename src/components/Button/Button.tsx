import styles from './Button.module.css'

export const Button = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Add Task</p>
    </div>
  )
}
