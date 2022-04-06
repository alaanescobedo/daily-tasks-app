import { MainCard } from '../components'
import { Button } from '../components/Button/Button'
import { TasksList } from '../components/Scroll'
import { useTasks } from '../hooks/useTasks'

export const AppView = (): JSX.Element => {
  const { localTasks } = useTasks()

  return (
    <>
      <MainCard />
      <TasksList tasks={localTasks} />
      <Button />
    </>
  )
}
