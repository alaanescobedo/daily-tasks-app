import signupSchema from '@auth/validations/signup.schema'
import express from 'express'
import validateRequest from 'middleware/validateRequest'
import { login, signup } from './authController'
import loginSchema from './validations/login.schema'

const router = express.Router()

router
  .route('/signup')
  .post(validateRequest(signupSchema), signup)
router
  .route('/login')
  .post(validateRequest(loginSchema), login)

export default router
