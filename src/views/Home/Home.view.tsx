import { useContext } from 'react'
import { MainCard, Button, ListTasks, Scroll } from '@components/index'
import { TaskContext } from '@context/Task'

import styles from './Home.module.css'

export const AppView = (): JSX.Element => {
  const { tasks } = useContext(TaskContext)
  return (
    <>
      <MainCard />
      <main className={styles.container_main}>
        <Scroll>
          <ListTasks tasks={tasks} />
        </Scroll>
      </main>
      <div className={styles.container_btn}>
        <Button />
      </div>
    </>
  )
}
