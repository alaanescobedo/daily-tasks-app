import { Navigate, useParams } from 'react-router-dom'
import { ActivitiesCard } from '../../components/Card/ActivitiesCard'
import { useTasks } from '../../hooks/useTasks'
import { AppContainerLayout } from '../../layouts/AppContainerLayout'

export const Activities = (): JSX.Element => {
  const params = useParams()
  const { tasks } = useTasks()

  const activities = tasks[params.day as string]

  if (activities === undefined) {
    return <Navigate to='/' />
  }

  return (
    <AppContainerLayout>
      <ActivitiesCard tasks={activities} day={params.day ?? ''} />
    </AppContainerLayout>
  )
}
