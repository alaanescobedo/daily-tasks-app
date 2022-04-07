import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainCard } from '../components'
import { ActivitiesCard } from '../components/Card/ActivitiesCard'
import { Task } from '../hooks/useTasks'

interface LocationState {
  tasks: Task[]
  day: string
}

export const Activities = (): JSX.Element => {
  // const params = useParams()
  const { state: locationState } = useLocation() as { state: LocationState }

  const [tasks, setTasks] = useState([] as Task[])
  const [day, setDay] = useState('')

  useEffect(() => {
    if (locationState !== null) {
      setTasks(locationState.tasks)
      setDay(locationState.day)
      return
    }
    setTasks([])
    setDay('Day')
  }, [])

  return (
    <>
      <MainCard />
      <ActivitiesCard tasks={tasks} day={day} />
    </>
  )
}
