import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUserView } from '../views/CreateUser.view'
import { ForgotPasswordView } from '../views/ForgotPassword.view'
import { SigninView } from '../views/Signin.view'
import { SignupView } from '../views/Signup.view'

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
