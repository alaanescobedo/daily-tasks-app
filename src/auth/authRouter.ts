import signupSchema from '@auth/validations/signup.schema'
import express from 'express'
import validateRequest from 'middleware/validateRequest'
import { confirmAccount, forgotPassword, login, resetPassword, signup } from './authController'
import forgotPasswordSchema from './validations/forgotPassword.schema'
import loginSchema from './validations/login.schema'
import passwordSchema from './validations/password.schema'

const router = express.Router()

router
  .route('/signup')
  .post(validateRequest(signupSchema), signup)
router
  .route('/login')
  .post(validateRequest(loginSchema), login)

router
  .route('/forgot-password')
  .post(validateRequest(forgotPasswordSchema), forgotPassword)
router
  .route('/reset-password')
  .patch(validateRequest(passwordSchema), resetPassword)

router
  .route('/verify')
  .patch(confirmAccount)

export default router
