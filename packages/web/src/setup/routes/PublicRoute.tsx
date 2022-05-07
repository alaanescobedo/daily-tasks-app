import { TaskProvider } from '@context/Task'
import { Outlet } from 'react-router-dom'

export const PublicRoute = (): JSX.Element => {
  return (
    <TaskProvider>
      <Outlet />
    </TaskProvider>
  )
}
