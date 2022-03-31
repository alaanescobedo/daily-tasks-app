import express from 'express'
import { signup } from './authController'

const router = express.Router()

router.post('/signup', signup)

export default router
