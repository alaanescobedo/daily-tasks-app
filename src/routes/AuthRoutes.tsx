import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUserView, ForgotPasswordView, SigninView, SignupView } from '@views'

export const AuthRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupView />} />
        <Route path='/signup/create-username' element={<CreateUserView />} />
        <Route path='/signin' element={<SigninView />} />
        <Route path='/forgot-password' element={<ForgotPasswordView />} />
      </Routes>
    </BrowserRouter>
  )
}
