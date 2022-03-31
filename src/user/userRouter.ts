import { Router } from 'express'
import { getAllUsers, getIndex, getUserById } from '@user/userController'

const router = Router()

router
  .route('/create-index')
  .get(getIndex)

router
  .route('/')
  .get(getAllUsers)

router
  .route('/:id')
  .get(getUserById)
export default router
