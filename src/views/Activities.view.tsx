import { Navigate, useParams } from 'react-router-dom'
import { MainCard } from '../components'
import { ActivitiesCard } from '../components/Card/ActivitiesCard'
import { useTasks } from '../hooks/useTasks'

export const Activities = (): JSX.Element => {
  const params = useParams()
  const { tasks } = useTasks()

  const activities = tasks[params.day as string]

  if (activities === undefined) {
    return <Navigate to='/' />
  }

  return (
    <>
      <MainCard />
      <ActivitiesCard tasks={activities} day={params.day ?? ''} />
    </>
  )
}
