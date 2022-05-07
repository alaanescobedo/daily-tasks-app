import { Router } from 'express'
import { flushData, generateSeed } from '@seed/seedController'

const router = Router()

router
  .route('/generate')
  .get(generateSeed)

router
  .route('/flush')
  .get(flushData)

export default router
