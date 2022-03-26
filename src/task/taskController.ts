import type { Request, Response } from "express"
import { createIndex, createTask } from "@lib/redis/db"

export const postTask = async (req: Request, res: Response) => {
  const { title, status, scheduledFor } = req.body

  const data = { title, status, scheduledFor }

  const taskCreated = await createTask(data)

  return res.status(201).send(taskCreated)
}
export const getIndex = async (_req: Request, res: Response) => {
  await createIndex()
  return res.status(200).send({ message: "Index created" })
}