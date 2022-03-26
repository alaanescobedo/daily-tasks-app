import { Router } from 'express'
import { flushData, generateSeedDB } from '@seed/seedController'

const router = Router()

router
  .route('/generate')
  .get(generateSeedDB)

router
  .route('/flush')
  .get(flushData)

export default router
