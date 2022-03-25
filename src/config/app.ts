import express from 'express'

const app = express()
app.use(express.json())

app.get("/ping", (_req, res) => {
  res.send("pong")
})

app.post("/api/v1/task", async (req, res) => {
  const { title, status, scheduledFor } = req.body

  const taskCreated = { title, status, scheduledFor }

  return res.status(201).send(taskCreated)
})

export default app