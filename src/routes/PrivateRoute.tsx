import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = (): JSX.Element => {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
