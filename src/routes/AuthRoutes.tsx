import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUserView } from '../views/CreateUser/CreateUser.view'
import { ForgotPasswordView } from '../views/ForgotPassowrd/ForgotPassword.view'
import { SigninView } from '../views/Signing/Signin.view'
import { SignupView } from '../views/Signup/Signup.view'

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
