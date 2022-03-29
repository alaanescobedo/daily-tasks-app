import express from 'express'
import taskRouter from '@task/taskRouter'
import seedRouter from '@seed/seedRouter'
import errorHandler from '@error/errorHandler'

const app = express()
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)

if (process.env['NODE_ENV'] === 'development' || process.env['NODE_ENV'] === 'test') {
  app.use('/api/v1/seeds', seedRouter)
}

app.use(errorHandler)

export default app
