import { useContext } from 'react'
import { MainCard, TaskCard } from '../components'
import { Button } from '../components/Button/Button'
import { Scroll } from '../components/Scroll/Scroll'
import { TaskContext } from '../context/Task/Task.context'

export const AppView = (): JSX.Element => {
  const { tasks } = useContext(TaskContext)

  return (
    <>
      <MainCard />
      <Scroll>
        {Object.entries(tasks).map(([day, tasks]: any) => (
          <TaskCard tasks={tasks} day={day} key={day} navigateTo={`/activities/${day as string}`} />
        ))}
      </Scroll>
      <Button />
    </>
  )
}
