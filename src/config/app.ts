import express from 'express'
import taskRouter from '@task/taskRouter'

const app = express()
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)

export default app