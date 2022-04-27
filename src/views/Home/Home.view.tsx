import { useContext } from 'react'
import { MainCard, Button, ListTasks, Scroll } from '@components/index'
import { TaskContext } from '@context/Task'

import styles from './Home.module.css'
import { getCurrentDate } from '@utils/getCurrentDate'
import { useUser } from 'hooks/useUser'

export const HomeView = (): JSX.Element => {
  const { tasks } = useContext(TaskContext)
  const currentDate = getCurrentDate().split(',').slice(0, 1).join(',')
  const { user } = useUser()

  return (
    <>
      <MainCard currentDate={currentDate} username={user.username} />
      <main className={styles.container_main}>
        <Scroll>
          <ListTasks tasks={tasks} />
        </Scroll>
      </main>
      <div className={styles.container_btn}>
        <Button isLink label='Add Task' />
      </div>
    </>
  )
}
