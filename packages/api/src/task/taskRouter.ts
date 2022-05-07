import { Router } from 'express'
import { deleteTask, getAllTask, getTaskById, postTask } from '@task/taskController'
import { authProtect } from 'middleware/authProtect'
import validateRequest from 'middleware/validateRequest'
import newTaskSchema from './validations/newTask.schema'

const router = Router()

router.use(authProtect)

router
  .route('/')
  .post(validateRequest(newTaskSchema), postTask)

router
  .route('/:id')
  .delete(deleteTask)

router
  .route('/search')
  .get(getAllTask)

router
  .route('/search/:id')
  .get(getTaskById)

export default router
