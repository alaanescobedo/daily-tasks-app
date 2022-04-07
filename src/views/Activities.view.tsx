import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MainCard } from '../components'
import { ActivitiesCard } from '../components/Card/ActivitiesCard'
import { Task, useTasks } from '../hooks/useTasks'
import { getCurrentDate } from '../utils/getCurrentDate'

interface LocationState {
  tasks: Task[]
  day: string
}

export const Activities = (): JSX.Element => {
  const params = useParams()
  const { tasks } = useTasks()
  const { state: locationState } = useLocation() as { state: LocationState }

  const [tasksState, setTasksState] = useState([] as Task[])
  const [day, setDay] = useState('')

  const today = getCurrentDate().split(',')[0]
  const tomorrow = getCurrentDate('en-US', Date.now() + 1000 * 60 * 60 * 24).split(',')[0]
  let weekday: string

  if (locationState !== null) {
    weekday = locationState.day === today ? 'Today' : locationState.day === tomorrow ? 'Tomorrow' : locationState.day
  } else {
    weekday = params.day === 'Today' ? today : params.day === 'Tomorrow' ? tomorrow : params.day ?? 'Redirect'
  }

  useEffect(() => {
    if (locationState !== null) {
      setTasksState(locationState.tasks)
      setDay(weekday)
      return
    }
    setTasksState(weekday !== undefined ? tasks[weekday] : [])
    setDay(params.day !== undefined ? params.day : '')
  }, [])

  return (
    <>
      <MainCard />
      <ActivitiesCard tasks={tasksState} day={day} />
    </>
  )
}
