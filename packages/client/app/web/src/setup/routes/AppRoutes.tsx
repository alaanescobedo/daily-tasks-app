import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from '@setup/routes'

import { ForgotPasswordView, ResetPasswordView, SigninView, SignupView } from '@modules/auth/ui'
import { HomeView, NewTaskView } from '@modules/task/ui'
import { CreateUserView } from '@modules/user/ui'

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<HomeView />} />
        <Route path='/new-task' element={<NewTaskView />} />
        {/* <Route path='/activities/:day' element={<Activities />} /> */}
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path='/auth/signup' element={<SignupView />} />
        <Route path='/auth/signin' element={<SigninView />} />
        <Route path='/forgot-password' element={<ForgotPasswordView />} />
        <Route path='/reset-password' element={<ResetPasswordView />} />
        <Route path='/create-username' element={<CreateUserView />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
