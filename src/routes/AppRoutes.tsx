import { Routes, Route, Navigate } from 'react-router-dom'
import { Activities, CreateUserView, ForgotPasswordView, HomeView, NewTaskView, SigninView, SignupView } from '@views'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<HomeView />} />
        <Route path='/new-task' element={<NewTaskView />} />
        <Route path='/activities/:day' element={<Activities />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path='/auth/signup' element={<SignupView />} />
        <Route path='/auth/signin' element={<SigninView />} />
        <Route path='/auth/forgot-password' element={<ForgotPasswordView />} />
        <Route path='/create-username' element={<CreateUserView />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
