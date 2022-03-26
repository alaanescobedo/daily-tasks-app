import express from 'express'
import taskRouter from '@task/taskRouter'
import seedRouter from '@seed/seedRouter'

const app = express()
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)
app.use('/api/v1/seeds', seedRouter)

export default app
