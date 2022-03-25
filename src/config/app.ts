import express from 'express'
import taskRouter from '@task/taskRouter'

const app = express()
app.use(express.json())

app.get("/ping", (_req, res) => {
  res.send("pong")
})

app.use('/api/v1/tasks', taskRouter)

export default app