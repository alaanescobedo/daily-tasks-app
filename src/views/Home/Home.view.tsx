import { useContext } from 'react'
import { MainCard, Button, ListTasks, Scroll } from '@components/index'
import { TaskContext } from '@context/Task'

import styles from './Home.module.css'
import { getCurrentDate } from '@utils/getCurrentDate'

export const HomeView = (): JSX.Element => {
  const { tasks } = useContext(TaskContext)
  const currentDate = getCurrentDate().split(',').slice(0, 1).join(',')
  return (
    <>
      <MainCard currentDate={currentDate} />
      <main className={styles.container_main}>
        <Scroll>
          <ListTasks tasks={tasks} />
        </Scroll>
      </main>
      <div className={styles.container_btn}>
        <Button label='Add Task' />
      </div>
    </>
  )
}
