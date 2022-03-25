import type { Request, Response } from "express"
import { createTask } from "@lib/redis/db"

export const postTask = async (req: Request, res: Response) => {
  const { title, status, scheduledFor } = req.body

  const data = { title, status, scheduledFor }

  const taskCreated = await createTask(data)

  return res.status(201).send(taskCreated)
}