import { Router } from 'express';
import { postTask } from '@task/taskController';

const router = Router();

router
  .route("/")
  .post(postTask)

export default router