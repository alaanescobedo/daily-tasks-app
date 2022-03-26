import { Router } from 'express';
import { getIndex, postTask } from '@task/taskController';

const router = Router();

router
  .route("/")
  .post(postTask)

router
  .route('/create-index')
  .get(getIndex)

export default router