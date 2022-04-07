import { Navigate, useLocation, useParams } from 'react-router-dom'
import { MainCard } from '../components'
import { ActivitiesCard } from '../components/Card/ActivitiesCard'
import { Task, useTasks } from '../hooks/useTasks'
import { getSevenDays } from '../utils/getSevenDays'

interface LocationState {
  tasks: Task[]
  day: string
}

export const Activities = (): JSX.Element => {
  const params = useParams()
  const { tasks } = useTasks()
  const { state: locationState } = useLocation() as { state: LocationState }
  const avaibleDays = getSevenDays().map(day => day.label)

  const weekday = locationState?.day ?? params?.day ?? ''

  if (!avaibleDays.includes(weekday)) {
    return <Navigate replace to='/' />
  }

  const weekdayTasks = locationState?.tasks ?? tasks[weekday] ?? []

  return (
    <>
      <MainCard />
      <ActivitiesCard tasks={weekdayTasks} day={weekday} />
    </>
  )
}
