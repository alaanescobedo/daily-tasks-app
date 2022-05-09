import { Stack } from '@components/Stack'
import { useTasks } from '@modules/task/state'
import { TaskI } from '@modules/task/task.interface'

export interface ListTasksProps {
  tasks: { [key: string]: TaskI[] }
}

// const sortTasksByDay = (tasks: any): any => {
//   return tasks.reduce((acc: any, task: any) => {
//     const date = task.scheduledFor.split('T')[0]
//     acc[date] = acc[date] ?? []
//     acc[date] = [...acc[date], task]
//     return acc
//   }, [])
// }

export const ListTasks = (): JSX.Element => {
  const { activeTasks } = useTasks()

  console.log(activeTasks)

  return (
    <Stack width='95%' vertical align='stretch' gap='1rem'>

    </Stack>
  )
}

// <TaskCard tasks={tasks} day={day} key={day} navigateTo={`/activities/${day as string}`} />
