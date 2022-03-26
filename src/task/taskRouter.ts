import { Router } from 'express';
import { getAllTask, getIndex, postTask } from '@task/taskController';

const router = Router();

router
  .route("/")
  .post(postTask)

router
  .route('/search')
  .get(getAllTask)

router
  .route('/create-index')
  .get(getIndex)

export default router