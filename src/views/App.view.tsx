import { MainCard, TaskCard } from '../components'
import { Button } from '../components/Button/Button'
import { Scroll } from '../components/Scroll'
import { useTasks } from '../hooks/useTasks'

export const AppView = (): JSX.Element => {
  const { tasks } = useTasks()

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
