import express from 'express'
import { createTask } from '../lib/redis/db'

const app = express()
app.use(express.json())

app.get("/ping", (_req, res) => {
  res.send("pong")
})

app.post("/api/v1/tasks", async (req, res) => {
  const { title, status, scheduledFor } = req.body

  const data = { title, status, scheduledFor }

  const taskCreated = await createTask(data)

  return res.status(201).send(taskCreated)
})

export default app