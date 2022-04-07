import { MainCard, TaskCard } from '../components'
import { Button } from '../components/Button/Button'
import { Scroll } from '../components/Scroll'
import { useTasks } from '../hooks/useTasks'

export const AppView = (): JSX.Element => {
  const { localTasks } = useTasks()

  return (
    <>
      <MainCard />
      <Scroll>
        {Object.entries(localTasks).map(([day, tasks]) => (
          <TaskCard tasks={tasks} day={day} key={day} navigateTo={`/activities/${day}`} />
        ))}
      </Scroll>
      <Button />
    </>
  )
}
