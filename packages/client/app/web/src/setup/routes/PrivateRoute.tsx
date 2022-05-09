import { useUser } from '@modules/user/state'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = (): JSX.Element => {
  const { isAuthenticated } = useUser()
  return isAuthenticated ? <Navigate to='/' /> : <Outlet />
}
