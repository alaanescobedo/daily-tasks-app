import { Router } from 'express'
import { deactivateUser, getAllUsers, getUserById, updateUser } from '@user/userController'
import { authProtect } from 'middleware/authProtect'

const router = Router()

router.use(authProtect)

router
  .route('/')
  .get(getAllUsers)

router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deactivateUser)

export default router
