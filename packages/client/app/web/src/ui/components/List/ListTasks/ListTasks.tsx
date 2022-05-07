import { Stack } from '@components/Stack'
import { useTasks } from '@hooks'
import { DailyTask } from '@components/DailyTask/DailyTaskViewer.copy'

// export interface ListTasksProps {
//   tasks: { [key: string]: TaskI[] }
// }

export const ListTasks = (): JSX.Element => {
  const { activeTasks } = useTasks()

  const tasksByDay = activeTasks.reduce((acc: any, task: any) => {
    const date = task.scheduledFor.split('T')[0]
    acc[date] = acc[date] ?? []
    acc[date] = [...acc[date], task]
    return acc
  }, [])

  return (
    <Stack width='95%' vertical align='stretch' gap='1rem'>
      {tasksByDay.map(([day, tasks]: any) => (
        <DailyTask day={day} tasks={tasks} key={day} />
      ))}
    </Stack>
  )
}

// <TaskCard tasks={tasks} day={day} key={day} navigateTo={`/activities/${day as string}`} />
