import { Outlet } from 'react-router-dom'
import { TaskProvider } from '@modules/task/state/Task.provider'

export const PublicRoute = (): JSX.Element => {
  return (
    <TaskProvider>
      <Outlet />
    </TaskProvider>
  )
}
