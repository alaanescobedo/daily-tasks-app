import { Router } from 'express'
import { deleteTask, getAllTask, getIndex, getTaskById, postTask } from '@task/taskController'
import { authProtect } from 'middleware/authProtect'

const router = Router()

router.use(authProtect)

router
  .route('/')
  .post(postTask)

router
  .route('/:id')
  .delete(deleteTask)

router
  .route('/search')
  .get(getAllTask)

router
  .route('/search/:id')
  .get(getTaskById)

router
  .route('/create-index')
  .get(getIndex)

export default router
