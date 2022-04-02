import { TaskCard } from '../Card'
import styles from './Scroll.module.css'

export const Tasks = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  )
}
