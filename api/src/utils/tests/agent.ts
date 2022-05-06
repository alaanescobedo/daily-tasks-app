import app from '@config/app'
import request from 'supertest'

const agent = request(app)

export type { Response } from 'supertest'
export default agent
