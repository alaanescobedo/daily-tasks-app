import { Navigate, useParams } from 'react-router-dom'
import { ListActivities } from '../../components/List/ListActivities'
import { useTasks } from '../../hooks/useTasks'
import { AppContainerLayout } from '../../layouts/AppContainerLayout'

import styles from './Activities.module.css'

export const Activities = (): JSX.Element => {
  const params = useParams()
  const { day } = params as { day: string }
  const { tasks } = useTasks()

  const activities = tasks[day]

  if (activities === undefined) {
    return <Navigate to='/' />
  }

  return (
    <AppContainerLayout>
      <h1 className={styles.heading}>Activities</h1>
      <ListActivities tasks={activities} day={day} />
      <div className={styles.date_container}>
        <p className={styles.date}>{day}</p>
      </div>
    </AppContainerLayout>
  )
}
