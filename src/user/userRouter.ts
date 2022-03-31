import { Router } from 'express'
import { getAllUsers, getIndex } from '@user/userController'

const router = Router()

router
  .route('/create-index')
  .get(getIndex)

router
  .route('/')
  .get(getAllUsers)

export default router
