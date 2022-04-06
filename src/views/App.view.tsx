import { MainCard, TaskCard } from '../components'
import { Button } from '../components/Button/Button'
import { Scroll } from '../components/Scroll'
import { useTasks } from '../hooks/useTasks'
import { sortTasksByDay } from '../utils/sortTaskByDay'

export const AppView = (): JSX.Element => {
  const { localTasks } = useTasks()

  const tasksByDay = sortTasksByDay(localTasks)

  return (
    <>
      <MainCard />
      <Scroll>
        {tasksByDay.map(([day, tasks]) => (
          <TaskCard tasks={tasks} day={day} key={day} />
        ))}
      </Scroll>
      <Button />
    </>
  )
}
